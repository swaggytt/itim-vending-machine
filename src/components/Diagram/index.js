import * as go from "gojs";
import { ReactDiagram } from "gojs-react";
import { useEffect, useState } from "react";
import "./Diagram.css";
import { STATE_DATA } from "./stateData";

export default function Diagram(props) {
  const [key, setKey] = useState(props.value);
  const [prevKey, setPrevKey] = useState();
  const [nodeData, setNodeData] = useState(STATE_DATA.nodeDataArray);
  const [linkData, setLinkData] = useState(STATE_DATA.linkDataArray);

  const updatedNodeData = nodeData.map((node) => {
    if (node.key === key) {
      console.log("node");
      return {
        ...node,
        fill: "#FB5940",
      };
    } else {
      return node;
    }
  });

  const updatedLinkData = linkData.map((link) => {
    if (link.from === key) {
      console.log("link");
      return {
        ...link,
        visibleText: true,
        category: "State",
      };
    }
    else {
      return link;
    }
  });

  useEffect(() => {
    setPrevKey(key)
    setKey(props.value);
    setLinkData(updatedLinkData);
    setNodeData(updatedNodeData);
  }, [props.value]);

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
          fill: "#b0b0b0",
          width: 90,
          strokeWidth: 0,
        },
        // Shape.fill is bound to Node.data.color
        new go.Binding("fill", "fill")
      ),
      $(
        go.TextBlock,
        {
          font: "10pt Itim",
          stroke: "whitesmoke",
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
      new go.Binding("zOrder"),
      {
        relinkableFrom: false,
        relinkableTo: false,
      },
      {
        zOrder: 9,
        routing: go.Link.AvoidsNodes,
        adjusting: go.Link.End,
        curve: go.Link.JumpOver,
        corner: 5,
        opacity: 1.0,
      },
      new go.Binding("opacity").ofModel(),
      new go.Binding("points").makeTwoWay(),
      $(go.Shape, { strokeWidth: 2.5, stroke: "#c0c0c0" }), //Link path shape
      $(go.Shape, { toArrow: "Standard", fill: "#c0c0c0", stroke: null }), // Arrow head
      $(
        go.TextBlock,
        new go.Binding("text", "text"),
        new go.Binding("visible", "visibleText")
      ) // this is a Link label
    );

    diagram.nodeTemplateMap.add(
      "Start",
      $(
        go.Node,
        "Spot",
        { desiredSize: new go.Size(90, 90) },
        { locationSpot: go.Spot.Center },
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
          go.Point.stringify
        ),
        $(
          go.Shape,
          "Circle",
          {
            fill: "#5490C2" /* green */,
            stroke: null,
            portId: "",
            cursor: "pointer",
          },
          new go.Binding("fill", "fill")
        ),
        $(go.TextBlock, "Start", {
          font: "bold 16pt Itim, bold arial, sans-serif",
          stroke: "whitesmoke",
        })
      )
    );

    diagram.nodeTemplateMap.add(
      "Confirm",
      $(
        go.Node,
        "Spot",
        { desiredSize: new go.Size(90, 90) },
        { locationSpot: go.Spot.Center },
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
          go.Point.stringify
        ),
        $(
          go.Shape,
          "Circle",
          {
            fill: "#30C386",
            stroke: null,
            portId: "",
            cursor: "pointer",
          },
          new go.Binding("fill", "fill")
        ),
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
            font: "bold 13pt Itim, sans-serif",
            stroke: "whitesmoke",
          },
          new go.Binding("text").makeTwoWay()
        )
      )
    );

    diagram.linkTemplateMap.add(
      "State",
      $(
        go.Link,
        new go.Binding("zOrder"),
        {
          relinkableFrom: false,
          relinkableTo: false,
        },
        {
          zOrder: 99,
          routing: go.Link.AvoidsNodes,
          adjusting: go.Link.End,
          curve: go.Link.JumpOver,
          corner: 5,
          opacity: 1.0,
        },
        new go.Binding("opacity").ofModel(),
        new go.Binding("points").makeTwoWay(),
        $(go.Shape, { strokeWidth: 2.5, stroke: "#606060" }), //Link path shape
        $(go.Shape, { toArrow: "Standard", fill: "#606060", stroke: null }), // Arrow head
        $(
          go.TextBlock,
          new go.Binding("text", "text"),
          new go.Binding("visible", "visibleText"),
          { font: "12pt Itim", stroke : "black", textAlign: "center" }
        ) // this is a Link label
      )
    );

    diagram.isReadOnly = true;
    return diagram;
  }

  return (
    <div>
      {
        console.log(prevKey, key)
      }
      <ReactDiagram
        initDiagram={initDiagram}
        divClassName="diagram-component"
        nodeDataArray={nodeData}
        linkDataArray={linkData}
      ></ReactDiagram>
    </div>
  );
}
