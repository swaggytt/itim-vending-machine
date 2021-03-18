import InputButton, {
  ConfirmButton,
  OneChoice,
  ReselectButton,
  TwoChoices,
} from "../components/inputButton/inputButton.js";
import "./home.css";

export default function Home() {
  return (
    <div>
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
