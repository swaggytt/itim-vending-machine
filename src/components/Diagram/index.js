import * as go from "gojs";
import { ReactDiagram } from "gojs-react";
import { useState } from "react";
import "./Diagram.css";

export default function Diagram() {
  function initDiagram() {
    const $ = go.GraphObject.make;
    const diagram = $(go.Diagram, {
      "undoManager.isEnabled": true, // must be set to allow for model change listening
      // 'undoManager.maxHistoryLength': 0,  // uncomment disable undo/redo functionality
      "clickCreatingTool.archetypeNodeData": {
        text: "new node",
        color: "lightblue",
      },
      model: $(go.GraphLinksModel, {
        linkKeyProperty: "key", // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
      }),
    });
    // define a simple Node template
    diagram.nodeTemplate = $(
      go.Node,
      "Auto", // the Shape will go around the TextBlock
      new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
        go.Point.stringify
      ),
      $(
        go.Shape,
        "Circle",
        { name: "SHAPE", fill: "white", strokeWidth: 0 },
        // Shape.fill is bound to Node.data.color
        new go.Binding("fill", "color")
      ),
      $(
        go.TextBlock,
        { margin: 8, editable: true }, // some room around the text
        new go.Binding("text").makeTwoWay()
      )
    );

    return diagram;
  }

  const [nodeData, setNodeData] = useState([
    { key: 0, text: "Start", color: "lightgreen", loc: "0 0" },
    { key: 1, text: "Cone", color: "lightgreen", loc: "200 100" },
    { key: 2, text: "Bread", color: "lightgreen", loc: "200 -100" },
    { key: 3, text: "Cone/nStickyrice", color: "lightgreen", loc: "400 100" },
    { key: 4, text: "Bread/nStickyrice", color: "lightgreen", loc: "400 -100" },
    { key: 5, text: "Cone/nChocolate", color: "lightgreen", loc: "600 250" },
    { key: 6, text: "Cone/nVanilla", color: "lightgreen", loc: "600 100" },
    { key: 7, text: "Bread/nChocolate", color: "lightgreen", loc: "600 -100" },
    { key: 8, text: "Bread/nVanilla", color: "lightgreen", loc: "600 -250" },
    {
      key: 9,
      text: "Cone/nStickyrice/nChocolate",
      color: "lightgreen",
      loc: "800 250",
    },
    {
      key: 10,
      text: "Cone/nStickyrice/nVanilla",
      color: "lightgreen",
      loc: "800 100",
    },
    {
      key: 11,
      text: "Bread/nStickyrice/nChocolate",
      color: "lightgreen",
      loc: "800 -100",
    },
    {
      key: 12,
      text: "Bread/nStickyrice/nVanilla",
      color: "lightgreen",
      loc: "800 -250",
    },
    { key: 13, text: "Confirm", color: "lightgreen", loc: "1000 0" },
  ]);

  const [linkData, setLinkData] = useState([
    { key: -1, from: 0, to: 1, text: "Cone" },
    { key: -2, from: 0, to: 2, text: "Bread" },
  ]);

  return (
    <div>
      <h1>Home</h1>
      <ReactDiagram
        initDiagram={initDiagram}
        divClassName="diagram-component"
        nodeDataArray={nodeData}
        linkDataArray={linkData}
      ></ReactDiagram>
    </div>
  );
}
