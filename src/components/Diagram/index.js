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
      "Auto", {},// the Shape will go around the TextBlock
      new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
        go.Point.stringify
      ),
      $(
        go.Shape,
        "RoundedRectangle",
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
          margin: 0,
          editable: false,
          textAlign: "center",
          overflow: go.TextBlock.OverflowClip,
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
      $(go.Shape, { toArrow: "Standard" }), // Arrow head
      // $(go.TextBlock,new go.Binding("text", "text"))
    );

    return diagram;
  }

  const [nodeData, setNodeData] = useState([
    { key: 0, text: "Start", color: "lightgreen", loc: "0 0" },
    { key: 1, text: "Cone", color: "lightgreen", loc: "200 -100" },
    { key: 2, text: "Bread", color: "lightgreen", loc: "200 100" },
    { key: 3, text: "Cone\nStickyrice", color: "lightgreen", loc: "400 -100" },
    { key: 4, text: "Bread\nStickyrice", color: "lightgreen", loc: "400 100" },
    { key: 5, text: "Cone\nChocolate", color: "lightgreen", loc: "600 -250" },
    { key: 6, text: "Cone\nVanilla", color: "lightgreen", loc: "600 -100" },
    { key: 7, text: "Bread\nChocolate", color: "lightgreen", loc: "600 100" },
    { key: 8, text: "Bread\nVanilla", color: "lightgreen", loc: "600 250" },
    {
      key: 9,
      text: "Cone\nStickyrice\nChocolate",
      color: "lightgreen",
      loc: "800 -250",
    },
    {
      key: 10,
      text: "Cone\nStickyrice\nVanilla",
      color: "lightgreen",
      loc: "800 -100",
    },
    {
      key: 11,
      text: "Bread\nStickyrice\nChocolate",
      color: "lightgreen",
      loc: "800 100",
    },
    {
      key: 12,
      text: "Bread\nStickyrice\nVanilla",
      color: "lightgreen",
      loc: "800 250",
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

    //From Cone/Stickyrice
    { key :-14, from: 3, to: 1, text: "stickyrice"},
    { key :-15, from: 3, to: 3, text: "cone, confirm"},
    { key :-16, from: 3, to: 4, text: "bread"},
    { key :-17, from: 3, to: 9, text: "chocolate"},
    { key :-18, from: 3, to: 10, text: "vanilla"},

    //From Bread/Stickyrice
    { key :-19, from: 4, to: 2, text: "stickyrice"},
    { key :-20, from: 4, to: 3, text: "cone"},
    { key :-21, from: 4, to: 4, text: "bread, confirm"},
    { key :-22, from: 4, to: 11, text: "chocolate"},
    { key :-23, from: 4, to: 12, text: "vanilla"},

    //From Cone/Chocolate
    { key :-24, from: 5, to: 3, text: "chocolate"},
    { key :-25, from: 5, to: 5, text: "cone"},
    { key :-26, from: 5, to: 6, text: "vanilla"},
    { key :-27, from: 5, to: 7, text: "bread"},
    { key :-28, from: 5, to: 9, text: "stickyrice"},
    { key :-29, from: 5, to: 13, text: "confirm"},

    //From Cone/Vanilla
    { key :-30, from: 6, to: 1, text: "vanilla"},
    { key :-31, from: 6, to: 5, text: "chocolate"},
    { key :-32, from: 6, to: 6, text: "cone"},
    { key :-33, from: 6, to: 8, text: "bread"},
    { key :-34, from: 6, to: 10, text: "stickyrice"},
    { key :-35, from: 6, to: 13, text: "confirm"},

    //From Bread/Chocolate
    { key :-36, from: 7, to: 2, text: "chocolate"},
    { key :-37, from: 7, to: 5, text: "cone"},
    { key :-38, from: 7, to: 7, text: "bread"},
    { key :-39, from: 7, to: 8, text: "vanilla"},
    { key :-40, from: 7, to: 11, text: "stickyrice"},
    { key :-41, from: 7, to: 13, text: "confirm"},

    //From Bread/Vanilla
    { key :-42, from: 8, to: 2, text: "vanilla"},
    { key :-43, from: 8, to: 6, text: "cone"},
    { key :-44, from: 8, to: 7, text: "chocolate"},
    { key :-45, from: 8, to: 8, text: "bread"},
    { key :-46, from: 8, to: 12, text: "stickyrice"},
    { key :-47, from: 8, to: 13, text: "confirm"},

    //From Cone/Stickyrice/Chocolate
    { key :-48, from: 9, to: 3, text: "chocolate"},
    { key :-49, from: 9, to: 5, text: "stickyrice"},
    { key :-50, from: 9, to: 9, text: "cone"},
    { key :-51, from: 9, to: 10, text: "vanilla"},
    { key :-52, from: 9, to: 11, text: "bread"},
    { key :-53, from: 9, to: 13, text: "confirm"},

    //From Cone/Stickyrice/Vanilla
    { key :-54, from: 10, to: 3, text: "vanilla"},
    { key :-55, from: 10, to: 6, text: "stickyrice"},
    { key :-56, from: 10, to: 9, text: "chocolate"},
    { key :-57, from: 10, to: 10, text: "cone"},
    { key :-58, from: 10, to: 12, text: "bread"},
    { key :-59, from: 10, to: 13, text: "confirm"},

    //From Bread/Stickyrice/Chocolate
    { key :-60, from: 11, to: 4, text: "chocolate"},
    { key :-61, from: 11, to: 7, text: "stickyrice"},
    { key :-62, from: 11, to: 9, text: "cone"},
    { key :-63, from: 11, to: 11, text: "bread"},
    { key :-64, from: 11, to: 12, text: "vanilla"},
    { key :-65, from: 11, to: 13, text: "confirm"},

    //From Bread/Stickyrice/Vanilla
    { key :-66, from: 12, to: 4, text: "vanilla"},
    { key :-67, from: 12, to: 8, text: "stickyrice"},
    { key :-68, from: 12, to: 10, text: "cone"},
    { key :-69, from: 12, to: 11, text: "chocolate"},
    { key :-70, from: 12, to: 12, text: "bread"},
    { key :-71, from: 12, to: 13, text: "confirm"},
  ]);

  return (
    <div>
      <ReactDiagram
        initDiagram={initDiagram}
        divClassName="diagram-component"
        nodeDataArray={nodeData}
        linkDataArray={linkData}
      ></ReactDiagram>
    </div>
  );
}
