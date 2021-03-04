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
      "Fix", // the Shape will go around the TextBlock
      new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
        go.Point.stringify
      ),
      $(
        go.Shape,
        "Circle",
        {
          name: "SHAPE",
          fill: "white",
          width: 75,
          strokeWidth: 0,
        },
        // Shape.fill is bound to Node.data.color
        new go.Binding("fill", "color")
      ),
      $(
        go.TextBlock,
        {
          margin: 8,
          editable: false,
          textAlign: "center",
          wrap: go.TextBlock.WrapDesiredSize,
        }, // some room around the text
        new go.Binding("text").makeTwoWay()
      )
    );

    diagram.linkTemplate = $(
      go.Link,
      {
        relinkableFrom: true,
        relinkableTo: true,
      },
      {
        routing: go.Link.AvoidsNodes,
        adjusting: go.Link.End,
        curve: go.Link.JumpOver,
        corner: 5,
        opacity: 1.0,
      },
      new go.Binding("opacity").ofModel(),
      $(go.Shape), //Link path shape
      $(go.Shape, { toArrow: "Standard" }) // Arrow head
    );

    return diagram;
  }

  const [nodeData, setNodeData] = useState([
    { key: 0, text: "Start", color: "lightgreen", loc: "0 0" },
    { key: 1, text: "Cone", color: "lightgreen", loc: "200 -100" },
    { key: 2, text: "Bread", color: "lightgreen", loc: "200 100" },
    { key: 3, text: "Cone/nStickyrice", color: "lightgreen", loc: "400 -100" },
    { key: 4, text: "Bread/nStickyrice", color: "lightgreen", loc: "400 100" },
    { key: 5, text: "Cone/nChocolate", color: "lightgreen", loc: "600 -250" },
    { key: 6, text: "Cone/nVanilla", color: "lightgreen", loc: "600 -100" },
    { key: 7, text: "Bread/nChocolate", color: "lightgreen", loc: "600 100" },
    { key: 8, text: "Bread/nVanilla", color: "lightgreen", loc: "600 250" },
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
    // From Start
    { key: -1, from: 0, to: 0, text: " " },
    { key: -2, from: 0, to: 1, text: "Cone" },
    { key: -3, from: 0, to: 2, text: "Bread" },

    // From Cone
    { key: -4, from: 1, to: 1, text: " " },
    { key: -5, from: 1, to: 2, text: "bread" },
    { key: -6, from: 1, to: 3, text: "stickyrice" },
    { key: -7, from: 1, to: 5, text: "chocolate" },
    { key: -8, from: 1, to: 6, text: "vanilla" },

    // From Bread
    { key: -9, from: 2, to: 1, text: "cone" },
    { key: -10, from: 2, to: 2, text: " " },
    { key: -11, from: 2, to: 4, text: "stickyrice" },
    { key: -12, from: 2, to: 7, text: "chocolate" },
    { key: -13, from: 2, to: 8, text: "vanilla" },
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
