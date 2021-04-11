import { ReactDiagram } from "gojs-react";
import { useEffect, useState } from "react";
import initDiagram from "./initDiagram";
import "./Diagram.css";
import setStateDiagram from "../../function/setDiagramState";
import { STATE_DATA } from "./stateData";

var prevKey = -1;
var key = 0;
var clock = true;

export default function Diagram(props) {
  const input = props.value;
  const click = props.click;
  const [nodeData, setNodeData] = useState(STATE_DATA.nodeDataArray);
  const [linkData, setLinkData] = useState(STATE_DATA.linkDataArray);

  useEffect(() => {
    if (clock) {
      prevKey = key;
      key = setStateDiagram(input, key);
      localStorage.setItem("state", key);
      localStorage.setItem("prevState", prevKey);
      if (key === 0) {
        prevKey = key;
      }
    //   console.log(prevKey, key);
    }
    clock = !clock;
    // console.log(clock)
    setLinkData(updatedLinkData);
    setNodeData(updatedNodeData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [click]);

  const updatedNodeData = nodeData.map((node) => {
    if (node.key === key) {
      return {
        ...node,
        fill: "#FB5940",
      };
    } else {
      return node;
    }
  });

  const updatedLinkData = linkData.map((link) => {
    if (link.from === prevKey && link.to === key && key !== 0) {
      return {
        ...link,
        category: "Prev",
      };
    } else if (link.from === key) {
      return {
        ...link,
        visibleText: true,
        category: "State",
      };
    } else {
      return link;
    }
  });

  return (
    <div>
      <ReactDiagram
        initDiagram={initDiagram}
        divClassName='diagram-component'
        nodeDataArray={nodeData}
        linkDataArray={linkData}
      ></ReactDiagram>
    </div>
  );
}
