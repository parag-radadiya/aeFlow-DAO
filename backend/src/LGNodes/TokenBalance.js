import { LiteGraph } from "litegraph.js";
import { getTokenBalance } from '../aeternity/utils.js'
import PubSub from "pubsub-js";
// Define custom node class
function TokenBalance() {
    this.color = "#66CC66"; // green
    this.size = [120, 60];
    // Add input trigger port
    this.addInput("Trigger", LiteGraph.ACTION);
    this.addInput("address", "string");
    this.addInput("tokenaddress", "string");
    this.addOutput("Success", LiteGraph.EVENT);
    this.addOutput("Error", LiteGraph.EVENT);
    this.addOutput("Balance", "number");
    this.mode = LiteGraph.ON_TRIGGER;
}

TokenBalance.title = "TokenBalance";
TokenBalance.desc = "Token Balance";
TokenBalance.title_text_color = "#000000";

TokenBalance.prototype.onAction = async function () {
    try {
        console.log("perfecto")
        var arr = this.getInputData(1);
        var tokenaddr = this.getInputData(2);
        if (!arr) {
            console.log("why not arr")
            return
        }

        let bal = await getTokenBalance(arr, tokenaddr)
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
LiteGraph.registerNodeType("Aeternity/TokenBalance", TokenBalance);
