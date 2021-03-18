import React, { PropTypes, Component } from "react";
import "./inputButton.css";

export function TwoChoices({ valueHeader, valueLeft, valueRight }) {
  return (
    <div>
      <div class="twoChoicesInputButton">
        <div class="header">{valueHeader}</div>
        <div class="groupedButton">
          <button class="halfChildButton">{valueLeft}</button>
          <button class="halfChildButton">{valueRight}</button>
        </div>
      </div>
    </div>
  );
}

export function OneChoice({ valueHeader, valueChild }) {
  return (
    <div>
      <div class="oneChoicesInputButton">
        <div class="header">{valueHeader}</div>
        <div class="groupedButton">
          <button class="fullChildButton">{valueChild}</button>
        </div>
      </div>
    </div>
  );
}

export function ConfirmButton(props){
  return(
    <div>
      <button class="confirmButton">
      {props.value}
      </button>
    </div>
  );
}

export function ReselectButton(props){
  return(
    <div>
      <button class="reselectButton">
      {props.value}
      </button>
    </div>
  );
}

export default {OneChoice,TwoChoices,ConfirmButton,ReselectButton}
