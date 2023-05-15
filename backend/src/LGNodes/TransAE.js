import { LiteGraph } from "litegraph.js";
import { transferAe } from "../aeternity/utils";
import PubSub from "pubsub-js";
// Define custom node class
function TransAE() {
    console.log("dlkjsdflkjdsflkjflksjsdlkfjlskjfldsfjsl")
    this.color = "#66CC66"; // green
    this.size = [120, 60];
    // Add input trigger port
    this.addInput("Trigger", LiteGraph.ACTION);
    this.addInput("address", "string");
    this.addInput("amount", "number")
    this.addOutput("Success", LiteGraph.EVENT);
    this.addOutput("Error", LiteGraph.EVENT);
}

TransAE.title = "Give AE";
TransAE.desc = "Give AE";
TransAE.title_text_color = "#000000";

TransAE.prototype.onAction = async function (action, param, options) {
    try {
        console.log("here")
        var addr = this.getInputData(1);
        var amount = this.getInputData(2);
        if (!amount || !addr) {
            console.log("no amount or address")
            return
        }
        console.log("am i working")
        let ans = await transferAe(this.daoaddr, addr, amount)
        console.log(ans)

        this.triggerSlot(0);
        PubSub.publish(
            `worker_${this.escrowId}`,
            JSON.stringify({
                id: this.id,

            }))
    }
    catch (err) {
        console.log(err)
        this.triggerSlot(1);
    }
}




// Register custom node class with LiteGraph and place it under a "Custom" category in the menu
LiteGraph.registerNodeType("Aeternity/TransAE", TransAE);
