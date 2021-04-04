import Diagram from "../components/Diagram";
import "./home.css";
import {useState, useEffect} from "react";
import useForceUpdate from "../function/useForceUpdate"

export default function Home() {

  const [input,setInput] = useState("start");
  const [click, setClick] = useState(true);
  const {key, forceUpdate} = useForceUpdate();

  useEffect(() => {
    forceUpdate()
    // console.log("force")
  }, [click])

  return (
    <div key={key} className="container">
      <div  className="state-diagram">
        <Diagram value={input} click={click}/>
        <button onClick={() => {setInput("cone");setClick(!click)}}>Cone</button>
        <button onClick={() => {setInput("bread");setClick(!click)}}>Bread</button>
        <button onClick={() => {setInput("sticky");setClick(!click)}}>StickyRice</button>
        <button onClick={() => {setInput("choco");setClick(!click)}}>Choco</button>
        <button onClick={() => {setInput("vanilla");setClick(!click)}}>Vanilla</button>
        <button onClick={() => {setInput("confirm");setClick(!click)}}>Confirm</button>
        <button onClick={() => {setInput("start");setClick(!click)}}>Reset</button>
      </div>
    </div>
  );
}