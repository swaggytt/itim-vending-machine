import "./inputButton.css";

function TwoChoices({
  valueHeader,
  valueLeft,
  valueRight,
  setInput,
  setClick,
  click,
}) {
  return (
    <div>
      <div class='twoChoicesInputButton'>
        <div class='header'>{valueHeader}</div>
        <div class='groupedButton'>
          <button
            class='halfChildButton'
            onClick={() => {
              setInput(valueLeft);
              setClick(!click);
            }}
          >
            {valueLeft}
          </button>
          <button
            class='halfChildButton'
            onClick={() => {
              setInput(valueRight);
              setClick(!click);
            }}
          >
            {valueRight}
          </button>
        </div>
      </div>
    </div>
  );
}

function OneChoice({ valueHeader, valueChild, setInput, setClick, click }) {
  return (
    <div>
      <div class='oneChoicesInputButton'>
        <div class='header'>{valueHeader}</div>
        <div class='groupedButton'>
          <button
            class='fullChildButton'
            onClick={() => {
              setInput(valueChild);
              setClick(!click);
            }}
          >
            {valueChild}
          </button>
        </div>
      </div>
    </div>
  );
}

function ConfirmButton(props) {
  return (
    <div>
      <button
        class='confirmButton'
        onClick={() => {
          props.setInput(props.value);
          props.setClick(!props.click);
        }}
      >
        {props.value}
      </button>
    </div>
  );
}

function ReselectButton(props) {
  return (
    <div>
      <button
        class='reselectButton'
        onClick={() => {
          props.setInput(props.value);
          props.setClick(!props.click);
        }}
      >
        {props.value}
      </button>
    </div>
  );
}

export function InputPanel(props) {
  return (
    <div className='button-state'>
      <div class='container-selector'>
        <TwoChoices
          valueHeader='ภาชนะ'
          valueLeft='cone'
          valueRight='bread'
          setInput={props.setInput}
          setClick={props.setClick}
          click={props.click}
        ></TwoChoices>
      </div>
      <div class='taste-selector'>
        <TwoChoices
          valueHeader='รสชาติ'
          valueLeft='chocolate'
          valueRight='vanilla'
          setInput={props.setInput}
          setClick={props.setClick}
          click={props.click}
        ></TwoChoices>
      </div>

      <div class='addon-selector'>
        <OneChoice
          valueHeader='Add-on'
          valueChild='sticky rice'
          setInput={props.setInput}
          setClick={props.setClick}
          click={props.click}
        ></OneChoice>
      </div>

      <div class='confirm-button'>
        <ConfirmButton
          value='confirm'
          setInput={props.setInput}
          setClick={props.setClick}
          click={props.click}
        ></ConfirmButton>
      </div>{}

      <div class='reselect-button'>
        <ReselectButton
          value='reset'
          setInput={props.setInput}
          setClick={props.setClick}
          click={props.click}
        ></ReselectButton>
      </div>
    </div>
  );
}

export default InputPanel;
