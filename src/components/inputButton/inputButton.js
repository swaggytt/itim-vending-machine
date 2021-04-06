import "./inputButton.css";

function TwoChoices({ valueHeader, valueLeft, valueRight }) {
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

function OneChoice({ valueHeader, valueChild }) {
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

function ConfirmButton(props){
  return(
    <div>
      <button class="confirmButton">
      {props.value}
      </button>
    </div>
  );
}

function ReselectButton(props){
  return(
    <div>
      <button class="reselectButton">
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
