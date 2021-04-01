import Diagram from "../components/Diagram";
import LogoNavbar from "../components/LogoNavbar";
import "./home.css";
import {useState} from "react";

export default function Home() {

  const [key,setKey] = useState(0)

  return (
    
      <div>
    <div className="container">
      <div className="state-diagram">
        <Diagram value={key}/>
        <button onClick={() => setKey(prev=>prev=1)}>Cone</button>
        <button>Bread</button>
        <button>StickyRice</button>
        <button>Choco</button>
        <button>Vanilla</button>
        <button>Accept</button>
      </div>
  );
}
