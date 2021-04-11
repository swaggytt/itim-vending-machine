import "./App.css";
import InputPanel from "./components/inputButton/inputButton.js";
import LogoNavbar from "./components/LogoNavbar";
import { useState, useEffect } from "react";
import useForceUpdate from "./function/useForceUpdate";
import Diagram from "./components/Diagram";
import ImageResult from "./components/ImageResult";
import Information from "./components/Information";
import useModal from "react-hooks-use-modal";

function App() {
  const [input, setInput] = useState("start");
  const [click, setClick] = useState(true);
  const [finish, setFinish] = useState(false);
  const [tape, setTape] = useState("");
  const { key, forceUpdate } = useForceUpdate();

  const [Modal, open, close, isOpen] = useModal("root", {
    preventScroll: true,
  });

  useEffect(() => {
    forceUpdate();
    if (input === "start" || input === "reset") {
      setFinish(false);
    }
    if (localStorage.getItem("state") === "13" && finish === false) {
      open();
      setFinish(true);
    }

    if (input === "reset") {
      setTape("");
    } else if (input !== "start") {
      setTape(tape + " " + input);
    }

    // console.log("force")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [click]);

  return (
    <div>
      <LogoNavbar />
      <div className="App">
        <div key={key} className="state-diagram">
          <Diagram value={input} click={click} />
          <div className="input-tape">{tape}</div>
        </div>

        <div>
          <ImageResult state={parseInt(localStorage.getItem("state"))} />
          <InputPanel setInput={setInput} setClick={setClick} click={click} />
        </div>
        <Information />
        <Modal>
          <div className="Container">
            <div className="Result">Your Result</div>
            <ImageResult state={parseInt(localStorage.getItem("prevState"))} />
            <button className="close-button" onClick={close}>
              CLOSED
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default App;
