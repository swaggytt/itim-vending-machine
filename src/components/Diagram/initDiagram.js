import * as go from "gojs";

export default function initDiagram() {
  const $ = go.GraphObject.make;
  // function highlightNode(nodeId) {
  //   var node = diagram.findNodeForKey(nodeId++);
  //   // console.log(node);
  //   if (node !== null) {
  //     // make sure the selected node is in the viewport
  //     diagram.scrollToRect(node.actualBounds);
  //     // move the large yellow node behind the selected node to highlight it
  //     highlighter.location = new go.Point(
  //       node.location.x + 40,
  //       node.location.y + 40
  //     );
  //     // console.log(node.location)
  //     // console.log(highlighter.location)
  //   }
  // }
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
    {
      locationSpot: go.Spot.Center,
    },
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
        { font: "12pt Itim", stroke: "black", textAlign: "center" }
      ) // this is a Link label
    )
  );

  diagram.linkTemplateMap.add(
    "Prev",
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
      $(go.Shape, { strokeWidth: 2.5, stroke: "red" }), //Link path shape
      $(go.Shape, { toArrow: "Standard", fill: "red", stroke: null }), // Arrow head
      $(
        go.TextBlock,
        new go.Binding("text", "text"),
        new go.Binding("visible", "visibleText"),
        { font: "12pt Itim", stroke: "black", textAlign: "center" }
      ) // this is a Link label
    )
  );
  // const highlighter = $(
  //   go.Part,
  //   "Auto",
  //   {
  //     layerName: "Background",
  //     selectable: false,
  //     isInDocumentBounds: false,
  //     locationSpot: go.Spot.Center,
  //   },
  //   $(go.Shape, "Ellipse", {
  //     fill: $(go.Brush, "Radial", { 0.5: "#ff004d", 1.0: "rgba(0, 0, 0, 0)" }),
  //     stroke: null,
  //     desiredSize: new go.Size(150, 150),
  //   })
  // );
  // diagram.add(highlighter);
  // highlightNode()

  diagram.isReadOnly = true;
  return diagram;
}
