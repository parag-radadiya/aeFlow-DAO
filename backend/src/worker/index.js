import LiteGraph from "litegraph.js";
import PubSub from "pubsub-js";

const start = async ({ escrowId, condition,daoaddr }) => {
  const graph = new LiteGraph.LGraph();
  console.log(condition)
  let token;

  const onLatestGraphReq = (msg, data) => {
    if (data == "CLOSE") {
      PubSub.unsubscribe(token);
    } else {
      PubSub.publish(`REQ_GRAPH_${data}`, JSON.stringify(graph.serialize()));
    }
  };

  token = PubSub.subscribe(`worker_gr_${escrowId}`, onLatestGraphReq);
  daoaddr = "ct_2LEU3W9cdF9AYT5H9vZX6q9x9EGvigSP6bjPQt42rjpBb8JkNp"
  graph.onNodeAdded = (node) => {
    node.escrowId = escrowId;
    node.daoaddr = daoaddr
  };
  graph.configure(condition);
  graph.config.daoaddr = daoaddr
 

  
  graph.start();
 
};

const worker = {
  start,
};

export default worker;
