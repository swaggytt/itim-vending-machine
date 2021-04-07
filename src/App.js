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
      {/* <LogoNavbar /> */}
      <div key={key} className="state-diagram">
        <Diagram value={input} click={click} />
      </div>
      <InputPanel setInput={setInput} setClick={setClick} click={click}></InputPanel>
    </div>
  );
}

export default App;
