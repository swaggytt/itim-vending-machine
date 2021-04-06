import ImageResult from "../components/ImageResult";
import "./home.css";
import { useState } from "react";

export default function Home() {
  const [base, setBase] = useState("");
  const [sticky, setSticky] = useState(false);
  const [ice, setIce] = useState("");

  const selectBase = (baseParam) => {
    if (baseParam === base) {
      setBase("");
    } else {
      setBase(baseParam);
    }
    console.log(base,ice,sticky)
  };

  const selectSticky = () => {
    setSticky((prev) => (prev = !prev));
    console.log(base,ice,sticky)
  };

  const selectIce = (iceParam) => {
    if (iceParam === ice) {
      setIce("");
    } else {
      setIce(iceParam);
    }
    console.log(base,ice,sticky)
  };
  return (
    <div>
      <div>
        <button onClick={() => selectBase("cone")}>CONE</button>
        <button onClick={() => selectBase("bread")}>BREAD</button>
      </div>
      <div>
        <button onClick={() => selectIce("chocolate")}>CHOCOLATE</button>
        <button onClick={() => selectIce("vanilla")}>VANILLA</button>
        <button onClick={selectSticky}>STICKY</button>
      </div>
      <ImageResult base={base} sticky={sticky} ice={ice} />
    </div>
  );
}
