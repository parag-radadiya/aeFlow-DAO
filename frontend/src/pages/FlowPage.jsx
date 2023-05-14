import "litegraph.js/css/litegraph.css";
import { LGraph, LGraphCanvas } from "litegraph.js";
import { useEffect, useRef, useState } from "react";
import CCHeader from "../components/CCHeader";
import LGKeys from "../components/LGKeys";
import RemoveNodes from "../Helpers/RemoveNodes";

import "../LGNodes/AeternityToDexNode"
import "../LGNodes/WebhookNode"
import "../LGNodes/FetchNode"
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
import withAuth from "../Helpers/WithAuth";

const Flow = () => {

  const canvasRef = useRef();
  const [lgCanvas, setLgCanvas] = useState(null)
  const [lgGraph, setLgGraph] = useState(null)

  useEffect(() => {
    const graph = new LGraph();
    setLgGraph(graph)
    const canvas = new LGraphCanvas("#graph-canvas", graph);
    canvasRef.current.style.backgroundColor = "black";
    setLgCanvas(canvas)
    const context = canvasRef.current.getContext("2d");
    context.strokeStyle = "#39FF14";
    const onResize = () => {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      canvas.graph.setDirtyCanvas(true, true);
    };
    onResize();
    RemoveNodes()
    graph.start();
    window.addEventListener("resize", onResize);
    
    return () => window.removeEventListener("resize", onResize);
  }, []);


  return (
    <div>
      <LGKeys lgCanvas={lgCanvas} />
      <CCHeader lgGraph={lgGraph} />
      <canvas
        ref={canvasRef}
        className="w-full h-full top-0"
        id="graph-canvas"
      ></canvas>
    </div>
  );
};

export default Flow;
