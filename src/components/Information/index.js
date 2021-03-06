import React from "react";
import useModal from "react-hooks-use-modal";
import "./information.css";
import ReactPlayer from "react-player";

const Information = () => {
  // eslint-disable-next-line
  const [Modal, open, close, isOpen] = useModal("root", {
    preventScroll: true,
  });
  return (
    <div>
      <span class="dot" onClick={open}>
        !
      </span>
      <Modal>
        <div className="Container">
          <div className="Header">
            <h1>How to use</h1>
          </div>

          <div className="Information">
            <p>
              <ReactPlayer url="https://www.youtube.com/watch?v=1nmOuhh4VOg" />
            </p>
          </div>

          <div className="Button">
            <button onClick={close} className="close-button">
              CLOSE
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Information;
