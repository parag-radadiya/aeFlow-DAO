import { LiteGraph } from "litegraph.js";
import { swaptoAE } from "../aeternity/utils";
import PubSub from "pubsub-js";
// Define custom node class
function SwapToAe() {
  this.color = "#66CC66"; // green
  this.size = [120, 60];
  // Add input trigger port
  this.addInput("Trigger", LiteGraph.ACTION);
  this.addInput("tokenaddress", "string");
  this.addInput("amount", "number")
  this.addOutput("Success", LiteGraph.EVENT);
  this.addOutput("Error", LiteGraph.EVENT);
  this.addOutput("Amount", "number");
  this.mode = LiteGraph.ON_TRIGGER;
}

SwapToAe.title = "Swap To AE";
SwapToAe.desc = "Token to AE swap";
SwapToAe.title_text_color = "#000000";



SwapToAe.prototype.onAction = async function (action, param, options) {
  try {

    var contractaddr = this.getInputData(1);
    var amount = this.getInputData(2);
    console.log(contractaddr)
    if (!amount || !contractaddr) {
      console.log("no amount or contract")
      return
    }
    console.log("am i working")
    let ans = await swaptoAE(this.daoaddr, contractaddr, amount)
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
LiteGraph.registerNodeType("Aeternity/SwapToAe", SwapToAe);
