import "litegraph.js/css/litegraph.css";
import { LGraph, LGraphCanvas } from "litegraph.js";
import { useEffect, useRef, useState } from "react";

import "../LGNodes/AeternityToDexNode"
import "../LGNodes/WebhookNode";
import "../LGNodes/FetchNode";
import "../LGNodes/AddLiquidity"
import "../LGNodes/AddLiquidityAe"
import "../LGNodes/RemoveLiquidity"
import "../LGNodes/SwapFromAe"
import "../LGNodes/SwapToAe"
import "../LGNodes/TransAE"
import "../LGNodes/TokenTransfer"
import "../LGNodes/SwapToken"
import "../LGNodes/TokenBalance"
import "../LGNodes/AeternityBalance"
import { useLocation, useParams } from "react-router";

let ViewFlow =  () => {

  const canvasRef = useRef();
  const [lgCanvas, setLgCanvas] = useState(null);
  const [lgGraph, setLgGraph] = useState(null);
  const location = useLocation();
  const params = useParams()
 
  useEffect(() => {
    
    const graph = new LGraph();
    setLgGraph(graph);
    const canvas = new LGraphCanvas("#graph-canvas", graph);
    canvasRef.current.style.backgroundColor = "black";
    setLgCanvas(canvas);
    const context = canvasRef.current.getContext("2d");
    context.strokeStyle = "#39FF14";
    const onResize = () => {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      canvas.graph.setDirtyCanvas(true, true);
    };
    onResize();
    canvas.allow_interaction = false;
    canvas.allow_searchbox = false;

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (lgGraph) {
      if(location.state && location.state.gData){
        console.log("the gdata is" + location.state.gData)
        lgGraph.configure(location.state.gData);
        lgGraph.start()
      }else{
        
        let socket = new WebSocket(`wss://ws.aeflowdao.cloud/live_view/${params.id  || "one"}`);
        socket.onopen = function (e) {};
  
        socket.onmessage = function (event) {
          let data = JSON.parse(event.data);
          if (data.action == "graph_update") {
            lgGraph.configure(data.data);
            lgGraph.start()
          } else {
              if(data.id){
                  const node = lgGraph.getNodeById(data.id)
                  for(let key in data){
                      if(key!='id'){
                          node.setOutputData(key, data[key])
                      }
                  }
                  node.triggerSlot(0)
              }
              
          }
        };
  
        socket.onclose = function (event) {};
  
        socket.onerror = function (error) {
          console.error(error);
        };
      }
    }
  }, [lgGraph]);

  return (
    <div>
       {(!location.state || !location.state.gData) }
      <canvas
        ref={canvasRef}
        className="w-full h-full top-0"
        id="graph-canvas"
      ></canvas>
    </div>
  );
};

export default ViewFlow
