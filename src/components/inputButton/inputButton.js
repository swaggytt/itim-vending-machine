import React, { PropTypes, Component } from "react";
import "./inputButton.css";

export function TwoChoices({ valueHeader, valueLeft, valueRight }) {
  return (
    <div>
      <div className="twoChoicesInputButton">
        <div className="header">{valueHeader}</div>
        <div className="groupedButton">
          <button className="halfChildButton">{valueLeft}</button>
          <button className="halfChildButton">{valueRight}</button>
        </div>
      </div>
    </div>
  );
}

export function OneChoice({ valueHeader, valueChild }) {
  return (
    <div>
      <div className="oneChoicesInputButton">
        <div className="header">{valueHeader}</div>
        <div className="groupedButton">
          <button className="fullChildButton">{valueChild}</button>
        </div>
      </div>
    </div>
  );
}

export function ConfirmButton(props){
  return(
    <div>
      <button className="confirmButton">
      {props.value}
      </button>
    </div>
  );
}

export function ReselectButton(props){
  return(
    <div>
      <button className="reselectButton">
      {props.value}
      </button>
    </div>
  );
}
// eslint-disable-next-line
export default {OneChoice,TwoChoices,ConfirmButton,ReselectButton}
