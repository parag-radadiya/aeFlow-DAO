import { LiteGraph } from "litegraph.js";
import { getBalance } from "../aeternity/utils"
import PubSub from "pubsub-js";
// Define custom node class
function AeBalance() {
  this.color = "#66CC66"; // green
  this.size = [120, 60];
  this.mode = LiteGraph.ON_TRIGGER;
  // Add input trigger port
  this.addInput("Trigger", LiteGraph.ACTION);
  this.addInput("address", "string");
  this.addOutput("Success", LiteGraph.EVENT);
  this.addOutput("Error", LiteGraph.EVENT);
  this.addOutput("Balance", "number");

}



AeBalance.title = "AeBalance";
AeBalance.desc = "Aeternity Balance";
AeBalance.title_text_color = "#000000";

AeBalance.prototype.onAction = async function () {
  try {
    console.log("perfecto")
    var arr = this.getInputData(1);

    if (!arr) {
      console.log("why not arr")
      return
    }

    let bal = await getBalance(arr)
    console.log(bal)
    this.setOutputData(2, bal)
    this.triggerSlot(0);
    PubSub.publish(
      `worker_${this.escrowId}`,
      JSON.stringify({
        id: this.id,
        2: parseInt(bal) || 0,

      }))
  }
  catch {
    this.triggerSlot(1);
  }

}

// Register custom node class with LiteGraph and place it under a "Custom" category in the menu
LiteGraph.registerNodeType("Aeternity/AeBalance", AeBalance);
