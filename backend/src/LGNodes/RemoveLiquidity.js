import { LiteGraph } from "litegraph.js";
import { removeLiquidity } from "../aeternity/utils"
import PubSub from "pubsub-js";
// Define custom node class
function RemoveLiquidity() {
  this.color = "#66CC66"; // green
  this.size = [120, 60];
  // Add input trigger port
  this.addInput("Trigger", LiteGraph.ACTION);
  this.addInput("tokenaddress1", "string");
  this.addInput("tokenaddress2", "string");
  this.addInput("amount", "number")
  this.addOutput("Success", LiteGraph.EVENT);
  this.addOutput("Error", LiteGraph.EVENT);
  this.addOutput("Token1 Amount", "number");
  this.addOutput("Token Amount", "number");
  this.mode = LiteGraph.ON_TRIGGER;
}

RemoveLiquidity.title = "Remove Liquidity";
RemoveLiquidity.desc = "Remove Liquidity";
RemoveLiquidity.title_text_color = "#000000";

RemoveLiquidity.prototype.onAction = async function (action, param, options) {
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
    let ans = await removeLiquidity(this.daoaddr, contractaddr1, contractaddr2, amount)
    console.log(ans)
    this.setOutputData(2, ans[1])
    this.setOutputData(3, ans[0])
    this.triggerSlot(0);
    PubSub.publish(
      `worker_${this.escrowId}`,
      JSON.stringify({
        id: this.id,
        2: parseInt(ans[1]) || 0,
        3: parseInt(ans[0]) || 0
      }))
  
  }
  catch (err) {
    console.log(err)
    this.triggerSlot(1);
  }
}




// Register custom node class with LiteGraph and place it under a "Custom" category in the menu
LiteGraph.registerNodeType("Aeternity/RemoveLiquidity", RemoveLiquidity);
