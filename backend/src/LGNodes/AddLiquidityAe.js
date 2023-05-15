import { LiteGraph } from "litegraph.js";
import { LiquiditytoAE } from "../aeternity/utils";
import PubSub from "pubsub-js";
// Define custom node class
function AddLiquidityAE() {
  this.color = "#66CC66"; // green
  this.size = [120, 60];
  // Add input trigger port
  this.addInput("Trigger", LiteGraph.ACTION);
  this.addInput("tokenaddress","string");
  
  this.addInput("amount","number")
  this.addOutput("Success",LiteGraph.EVENT);
  this.addOutput("Error",LiteGraph.EVENT);
  this.addOutput("Liquidity Amount","number");
  this.addOutput("Token Amount","number");
  this.mode = LiteGraph.ON_TRIGGER;
}

AddLiquidityAE.title = "AddLiquidityAE";
AddLiquidityAE.desc = "Add Liquidity with AE pair";
AddLiquidityAE.title_text_color = "#000000";

AddLiquidityAE.prototype.onAction = async function (action, param, options) {
  try {
    
    var contractaddr = this.getInputData(1);
    
    var amount = this.getInputData(2);
    console.log(contractaddr)
    
    console.log(amount)
    if (!amount || !contractaddr) {
      console.log("no amount or contract")
      return
    }
    console.log("am i working")
    let ans = await LiquiditytoAE(this.daoaddr,contractaddr, amount)
    console.log(ans)
    this.setOutputData(2,ans[2])
    this.setOutputData(3,ans[0])
    
    this.triggerSlot(0);

    PubSub.publish(
      `worker_${this.escrowId}`,
      JSON.stringify({
        id: this.id,
        2: parseInt(ans[2]) || 0,
        3: parseInt(ans[0]) || 0
      }))
  }
  catch(err) {
    console.log(err)
    this.triggerSlot(1);
  }
}




// Register custom node class with LiteGraph and place it under a "Custom" category in the menu
LiteGraph.registerNodeType("Aeternity/AddLiquidityAE",AddLiquidityAE);
