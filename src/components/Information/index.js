import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import useModal from "react-hooks-use-modal";
import "./information.css";

const Information = () => {
  const [Modal, open, close, isOpen] = useModal("root", {
    preventScroll: true,
  });
  return (
    <div>
      <span class='dot' onClick={open}>
        !
      </span>
      <Modal>
        <div className='Container'>
          <div className='Header'>
            <h1>How to use</h1>
          </div>

          <div className='Information'>
            <p>อยากจะใส่อะไรก็ใส่ไปเลย</p>
          </div>

          <div className='Button'>
            <button onClick={close} className="close-button">CLOSE</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Information;
