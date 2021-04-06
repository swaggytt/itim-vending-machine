import "./App.css";
import InputPanel from "./components/inputButton/inputButton.js";
import LogoNavbar from "./components/LogoNavbar";
import { useState, useEffect } from "react";
import useForceUpdate from "./function/useForceUpdate";
import Diagram from "./components/Diagram";

function App() {
  const [input, setInput] = useState("start");
  const [click, setClick] = useState(true);
  const { key, forceUpdate } = useForceUpdate();

  useEffect(() => {
    forceUpdate();
    // console.log("force")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [click]);

  return (
    <div className="App">
      <LogoNavbar />
      <div key={key} className="state-diagram">
        <Diagram value={input} click={click} />
        <button
          onClick={() => {
            setInput("cone");
            setClick(!click);
          }}
        >
          Cone
        </button>
        <button
          onClick={() => {
            setInput("bread");
            setClick(!click);
          }}
        >
          Bread
        </button>
        <button
          onClick={() => {
            setInput("sticky");
            setClick(!click);
          }}
        >
          StickyRice
        </button>
        <button
          onClick={() => {
            setInput("choco");
            setClick(!click);
          }}
        >
          Choco
        </button>
        <button
          onClick={() => {
            setInput("vanilla");
            setClick(!click);
          }}
        >
          Vanilla
        </button>
        <button
          onClick={() => {
            setInput("confirm");
            setClick(!click);
          }}
        >
          Confirm
        </button>
        <button
          onClick={() => {
            setInput("start");
            setClick(!click);
          }}
        >
          Reset
        </button>
      </div>
      <InputPanel></InputPanel>
    </div>
  );
}

export default App;
