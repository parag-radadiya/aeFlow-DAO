import { LGraph, LiteGraph } from "litegraph.js";
import { transferToken } from "../aeternity/utils";
import PubSub from "pubsub-js";
// Define custom node class
function TokenTransfer() {
  this.color = "#66CC66"; // green
  this.size = [120, 60];
  // Add input trigger port
  this.addInput("Trigger", LiteGraph.ACTION);
  this.addInput("tokenaddress", "string");
  this.addInput("address", "string");
  this.addInput("amount", "number")
  this.addOutput("Success", LiteGraph.EVENT);
  this.addOutput("Error", LiteGraph.EVENT);
  this.mode = LiteGraph.ON_TRIGGER;
}

TokenTransfer.title = "TokenTransfer";
TokenTransfer.desc = "Token Transfer";
TokenTransfer.title_text_color = "#000000";


TokenTransfer.prototype.onAction = async function (action, param, options) {
  try {
    var arr = this.getInputData(2);
    var contractaddr = this.getInputData(1);
    var amount = this.getInputData(3);
    console.log(contractaddr)
    if (!arr || !amount || !contractaddr) {
      console.log("why not address or amount or contract")
      return
    }
    console.log("am i working")
    console.log("the amount for token is ", parseInt(amount))
    let ans = await transferToken(this.daoaddr,contractaddr,arr, parseInt(amount))
    
    this.triggerSlot(0);
    PubSub.publish(
      `worker_${this.escrowId}`,
      JSON.stringify({
        id: this.id
      }))
  }
  catch(err) {
    console.log(err)
    this.triggerSlot(1);
  }
}

// Register custom node class with LiteGraph and place it under a "Custom" category in the menu
LiteGraph.registerNodeType("Aeternity/TokenTransfer", TokenTransfer);
