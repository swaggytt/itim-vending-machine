import Diagram from "../components/Diagram";
import "./home.css";

export default function Home() {
  return (
    <div className="container">
      <div className="state-diagram">
        <Diagram />
      </div>
    </div>
  );
}
