import Diagram from "../components/Diagram";
import "./home.css";
import {useState} from "react";

export default function Home() {

  const [key,setKey] = useState(0)

  return (
    <div key={key} className="container">
      <div className="state-diagram">
        <Diagram value={key}/>
        <button onClick={() => setKey(1)}>Cone</button>
        <button onClick={() => setKey(2)}>Bread</button>
        <button>StickyRice</button>
        <button>Choco</button>
        <button>Vanilla</button>
        <button>Accept</button>
      </div>
    </div>
  );
}
