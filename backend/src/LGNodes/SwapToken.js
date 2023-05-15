import { LiteGraph } from "litegraph.js";
import { swapfromToken } from "../aeternity/utils";
import PubSub from "pubsub-js";
// Define custom node class
function SwapToken() {
  this.color = "#66CC66"; // green
  this.size = [120, 60];
  // Add input trigger port
  this.addInput("Trigger", LiteGraph.ACTION);
  this.addInput("tokenaddress1", "string");
  this.addInput("tokenaddress2", "string");
  this.addInput("amount", "number")
  this.addOutput("Success", LiteGraph.EVENT);
  this.addOutput("Error", LiteGraph.EVENT);
  this.addOutput("Amount", "number");
  this.mode = LiteGraph.ON_TRIGGER;
}

SwapToken.title = "Swap Tokens";
SwapToken.desc = "Token to Token Swap";
SwapToken.title_text_color = "#000000";


SwapToken.prototype.onAction = async function (action, param, options) {
  try {

    var contractaddr1 = this.getInputData(1);
    var contractaddr2 = this.getInputData(2);
    var amount = this.getInputData(3);
    console.log(contractaddr1)
    console.log(contractaddr2)
    console.log(amount)
    if (!amount || !contractaddr1 || !contractaddr2) {
      console.log("no amount or contract")
      return
    }
    console.log("am i working")
    let ans = await swapfromToken(this.daoaddr, contractaddr1, contractaddr2, amount)
    console.log(ans)
    this.setOutputData(2, ans[1])
    this.triggerSlot(0);
    PubSub.publish(
      `worker_${this.escrowId}`,
      JSON.stringify({
        id: this.id,
        2: parseInt(ans[1]) || 0,
      }))
  }
  catch (err) {
    console.log(err)
    this.triggerSlot(1);
  }
}


// Register custom node class with LiteGraph and place it under a "Custom" category in the menu
LiteGraph.registerNodeType("Aeternity/SwapToken", SwapToken);
