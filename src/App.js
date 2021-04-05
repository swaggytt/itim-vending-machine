import "./App.css";
import InputButton, {
  ConfirmButton,
  OneChoice,
  ReselectButton,
  TwoChoices,
} from "./components/inputButton/inputButton.js";
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
  }, [click]);

  return (
    <div className="App">
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
      <div className="button-state">
        <p>Two choices</p>
        <div>
          <TwoChoices
            valueHeader="item header"
            valueLeft="item left"
            valueRight="item right"
          ></TwoChoices>
        </div>
        <p>One choice</p>
        <div>
          <OneChoice
            valueHeader="item header"
            valueChild="item child"
          ></OneChoice>
        </div>
        <p>Confirm button</p>
        <div>
          <ConfirmButton value="Confirm"></ConfirmButton>
        </div>
        <p>Confirm button</p>
        <div>
          <ReselectButton value="Reselect"></ReselectButton>
        </div>
      </div>
    </div>
  );
}

export default App;
