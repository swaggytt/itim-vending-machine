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
  const { key, forceUpdate } = useForceUpdate();

  const [Modal, open, close, isOpen] = useModal("root", {
    preventScroll: true,
  });

  useEffect(() => {
    forceUpdate();
    // console.log("force")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [click]);

  return (
    <div className='App'>
      {/* <LogoNavbar /> */}
      <div key={key} className='state-diagram'>
        <Diagram value={input} click={click} />
      </div>
      <div className='resultPanel'>
        <ImageResult
          state={parseInt(localStorage.getItem("state"))}
          className='space'
        />
        <InputPanel setInput={setInput} setClick={setClick} click={click} />
      </div>
      <Information />
      {localStorage.getItem("state") === "13" ? { open } : <></>}
      <Modal>
        <div className='Container'>
          <ImageResult state={parseInt(localStorage.getItem("state"))} />
        </div>
        <button onClick={close}>CLOSED</button>
      </Modal>
    </div>
  );
}

export default App;
