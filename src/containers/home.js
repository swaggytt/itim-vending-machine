import InputButton, {
  ConfirmButton,
  OneChoice,
  ReselectButton,
  TwoChoices,
} from "../components/inputButton/inputButton.js";
import "./home.css";
import { useState } from "react";

export default function Home() {
  const [key, setKey] = useState(0);

  return (
    <div className="container">
      <LogoNavbar />
      {/* <div className="state-diagram">
        <Diagram value={key} />
        <button onClick={() => setKey((prev) => (prev = 1))}>Cone</button>
        <button>Bread</button>
        <button>StickyRice</button>
        <button>Choco</button>
        <button>Vanilla</button>
        <button>Accept</button>
      </div> */}
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
  );
}
