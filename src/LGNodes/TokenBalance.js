import { LiteGraph } from "litegraph.js";
// Define custom node class
function TokenBalance() {
    this.color = "#66CC66"; // green
    this.size = [120, 60];
    // Add input trigger port
    this.addInput("Trigger", LiteGraph.ACTION);
    this.addInput("address", "string");
    this.addInput("tokenaddress", "string");
    this.addOutput("Success",LiteGraph.EVENT);
    this.addOutput("Error",LiteGraph.EVENT);
    this.addOutput("Balance","number");
    this.mode = LiteGraph.ON_TRIGGER;

}

TokenBalance.title = "TokenBalance";
TokenBalance.desc = "Token Balance";
TokenBalance.title_text_color = "#000000";


// Register custom node class with LiteGraph and place it under a "Custom" category in the menu
LiteGraph.registerNodeType("Aeternity/TokenBalance", TokenBalance);
