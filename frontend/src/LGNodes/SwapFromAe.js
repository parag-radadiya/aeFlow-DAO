import { LiteGraph } from "litegraph.js";
// Define custom node class
function SwapFromAe() {
  this.color = "#66CC66"; // green
  this.size = [120, 60];
  // Add input trigger port
  this.addInput("Trigger", LiteGraph.ACTION);
  this.addInput("tokenaddress","string");
  this.addInput("amount","number")
  this.addOutput("Success",LiteGraph.EVENT);
  this.addOutput("Error",LiteGraph.EVENT);
  this.addOutput("Amount","number");
}

SwapFromAe.title = "Swap From AE";
SwapFromAe.desc = "Ae to Token Swap";
SwapFromAe.title_text_color = "#000000";


// Register custom node class with LiteGraph and place it under a "Custom" category in the menu
LiteGraph.registerNodeType("Aeternity/SwapFromAe",SwapFromAe );
