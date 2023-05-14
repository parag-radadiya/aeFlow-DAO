import { LiteGraph } from "litegraph.js";
// Define custom node class
function SwapToAe() {
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

SwapToAe.title = "Swap To AE";
SwapToAe.desc = "Token to AE swap";
SwapToAe.title_text_color = "#000000";


// Register custom node class with LiteGraph and place it under a "Custom" category in the menu
LiteGraph.registerNodeType("Aeternity/SwapToAe",SwapToAe );
