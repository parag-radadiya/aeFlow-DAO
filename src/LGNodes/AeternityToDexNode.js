import { LiteGraph } from "litegraph.js";
// Define custom node class
function AeternityToDexNode() {
  this.color = "#66CC66"; // green
  this.size = [120, 60];
  // Add input trigger port
  this.addInput("OnFinish", LiteGraph.ACTION);
}

AeternityToDexNode.title = "Escrow Finish";
AeternityToDexNode.desc = "Escrow Finish";
AeternityToDexNode.title_text_color = "#000000";


// Register custom node class with LiteGraph and place it under a "Custom" category in the menu
LiteGraph.registerNodeType("Aeternity/AeternityToDexNode",AeternityToDexNode );
