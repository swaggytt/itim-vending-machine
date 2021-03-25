import * as go from "gojs";
import { ReactDiagram } from "gojs-react";
import { useState } from "react";
import "./Diagram.css";
import { STATE_DATA } from "./stateData";

export default function Diagram() {
  const [nodeData, setNodeData] = useState(STATE_DATA.nodeDataArray);
  const [linkData, setLinkData] = useState(STATE_DATA.linkDataArray);

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
      allowCopy: false,
      allowDelete: false,
      // allowSelect: false,
      allowLink: false,
    });
    // define a simple Node template
    diagram.nodeTemplate = $(
      go.Node,
      "Auto",
      {}, // the Shape will go around the TextBlock
      { locationSpot: go.Spot.Center },
      { desiredSize: new go.Size(90, 90) },
      new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
        go.Point.stringify
      ),
      $(
        go.Shape,
        "Circle",
        {
          name: "SHAPE",
          fill: "white",
          width: 90,
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
        relinkableFrom: false,
        relinkableTo: false,
      },
      {
        routing: go.Link.AvoidsNodes,
        adjusting: go.Link.End,
        curve: go.Link.JumpOver,
        corner: 5,
        opacity: 1.0,
      },
      new go.Binding("opacity").ofModel(),
      new go.Binding("points").makeTwoWay(),
      $(go.Shape), //Link path shape
      $(go.Shape, { toArrow: "Standard" }) // Arrow head
    );

    diagram.nodeTemplateMap.add(
      "Start",
      $(
        go.Node,
        "Spot",
        { desiredSize: new go.Size(90, 90) },
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
          go.Point.stringify
        ),
        $(go.Shape, "Circle", {
          fill: "#52ce60" /* green */,
          stroke: null,
          portId: "",
          cursor: "pointer",
        }),
        $(go.TextBlock, "Start", {
          font: "bold 16pt helvetica, bold arial, sans-serif",
          stroke: "whitesmoke",
        }),
      )
    );

    diagram.nodeTemplateMap.add(
      "Confirm",
      $(
        go.Node,
        "Spot",
        { desiredSize: new go.Size(90, 90) },
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
          go.Point.stringify
        ),
        $(go.Shape, "Circle", {
          fill: "#17b794",
          stroke: null,
          portId: "",
          cursor: "pointer",
        }),
        $(go.Shape, "Circle", {
          fill: null,
          desiredSize: new go.Size(70, 70),
          strokeWidth: 2,
          stroke: "whitesmoke",
        }),
        $(
          go.TextBlock,
          "Confirm",
          {
            font: "bold 13pt Quicksand, sans-serif",
            stroke: "whitesmoke",
          },
          new go.Binding("text").makeTwoWay()
        )
      )
    );
    diagram.isReadOnly = true;
    return diagram;
  }

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
