import { LiteGraph } from "litegraph.js";
// Define custom node class
function RemoveLiquidity() {
  this.color = "#66CC66"; // green
  this.size = [120, 60];
  // Add input trigger port
  this.addInput("Trigger", LiteGraph.ACTION);
  this.addInput("tokenaddress1","string");
  this.addInput("tokenaddress2","string");
  this.addInput("amount","number")
  this.addOutput("Success",LiteGraph.EVENT);
  this.addOutput("Error",LiteGraph.EVENT);
  this.addOutput("Token1 Amount","number");
  this.addOutput("Token Amount","number");
}

RemoveLiquidity.title = "Remove Liquidity";
RemoveLiquidity.desc = "Remove Liquidity";
RemoveLiquidity.title_text_color = "#000000";


// Register custom node class with LiteGraph and place it under a "Custom" category in the menu
LiteGraph.registerNodeType("Aeternity/RemoveLiquidity",RemoveLiquidity);
