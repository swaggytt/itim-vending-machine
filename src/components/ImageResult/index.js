import React from "react";
import { useState } from "react";
import "./ImageResult.css";
import cone from "./cone.png";
import conesticky from "./conesticky.png";
import conechoc from "./conechoc.png";
import conechocsticky from "./conechocsticky.png";
import coneva from "./coneva.png";
import conevasticky from "./conevasticky.png";

import bread from "./bread.png";
import breadsticky from "./breadsticky.png";
import breadchoc from "./breadchoc.png";
import breadchocsticky from "./breadchocsticky.png";
import breadva from "./breadva.png";
import breadvasticky from "./breadvasticky.png";

import start from "./start.png";
import finish from "./finish.png";

const ImageResult = (props) => {
  const state = props.state;
  const resultPicture = () => {
    // cone //
    // console.log(state);
    if (state === 1) {
      return cone;
    } else if (state === 5) {
      return conechoc;
    } else if (state === 6) {
      return coneva;
    } else if (state === 3) {
      return conesticky;
    } else if (state === 9) {
      return conechocsticky;
    } else if (state === 10) {
      return conevasticky;
    }
    // bread //
    else if (state === 2) {
      return bread;
    } else if (state === 7) {
      return breadchoc;
    } else if (state === 8) {
      return breadva;
    } else if (state === 4) {
      return breadsticky;
    } else if (state === 11) {
      return breadchocsticky;
    } else if (state === 12) {
      return breadvasticky;
    } else if (state === 0) {
      return start;
    } else if (state === 13) return finish;
  };
  const resultMessage = () => {
    if (state === 1) {
      return "cone";
    } else if (state === 5) {
      return "cone chocolate";
    } else if (state === 6) {
      return "cone vanailla";
    } else if (state === 3) {
      return "cone with stickyrice";
    } else if (state === 9) {
      return "cone chocolate with stickyrice";
    } else if (state === 10) {
      return "cone vanilla with stickyrice";
    }
    // bread //
    else if (state === 2) {
      return "bread";
    } else if (state === 7) {
      return "bread chocolate";
    } else if (state === 8) {
      return "bread vanilla";
    } else if (state === 4) {
      return "bread with stickyrice";
    } else if (state === 11) {
      return "bread chocolate with stickyrice";
    } else if (state === 12) {
      return "bread vanilla with stickyrice";
    } else if (state === 0) {
      return "กินไอติมมั้ย ???";
    } else if (state === 13) return "Time for Eating !!!";
  };
  return (
    <div className='icepage'>
      <div className='container'>
        <div className='imgContainer'>
          <img src={resultPicture()} className='iceimg' alt='IceResult' />
        </div>
      </div>
      <div className='result'>{resultMessage()}</div>
    </div>
  );
};
export default ImageResult;
