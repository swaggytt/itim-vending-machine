import "./inputButton.css";

function TwoChoices({ valueHeader, valueLeft, valueRight }) {
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

function OneChoice({ valueHeader, valueChild }) {
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

function ConfirmButton(props){
  return(
    <div>
      <button className="confirmButton">
      {props.value}
      </button>
    </div>
  );
}

function ReselectButton(props){
  return(
    <div>
      <button className="reselectButton">
      {props.value}
      </button>
    </div>
  );
}

export function InputPanel(){
  return(
    <div className="button-state">
        
        <div class="container-selector">
          <TwoChoices
            valueHeader="ภาชนะ"
            valueLeft="item left"
            valueRight="item right"
          ></TwoChoices>
        </div>
        <div class="taste-selector">
          <TwoChoices
            valueHeader="รสชาติ"
            valueLeft="item left"
            valueRight="item right"
          ></TwoChoices>
        </div>
        
        <div class="addon-selector">
          <OneChoice
            valueHeader="Add-on"
            valueChild="item child"
          ></OneChoice>
        </div>
        
        <div class="confirm-button">
          <ConfirmButton value="ยืนยัน"></ConfirmButton>
        </div>
        
        <div class="reselect-button">
          <ReselectButton value="เลือกใหม่"></ReselectButton>
        </div>
      </div>
  );
}

export default InputPanel;
