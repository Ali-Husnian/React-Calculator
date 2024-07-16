/* eslint-disable no-eval */
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const handelClick = (e) => {
    setValue(value + e.target.innerHTML);
  };
  const equal = () => {
    setValue(eval(value));
  };
  const clear = () => {
    setValue("");
  };
  const backspace = () => {
    setValue(value.toString().slice(0, -1));
  };
  return (
    <>
      <div className="calculator">
        <input type="text" placeholder="0" value={value} />
        <div>
          <button onClick={clear}>AC</button>
          <button onClick={backspace}>DEL</button>
          <button onClick={handelClick}>%</button>
          <button onClick={handelClick}>/</button>
        </div>
        <div>
          <button onClick={handelClick}>7</button>
          <button onClick={handelClick}>8</button>
          <button onClick={handelClick}>9</button>
          <button onClick={handelClick}>*</button>
        </div>
        <div>
          <button onClick={handelClick}>4</button>
          <button onClick={handelClick}>5</button>
          <button onClick={handelClick}>6</button>
          <button onClick={handelClick}>-</button>
        </div>
        <div>
          <button onClick={handelClick}>1</button>
          <button onClick={handelClick}>2</button>
          <button onClick={handelClick}>4</button>
          <button onClick={handelClick}>+</button>
        </div>
        <div>
          <button onClick={handelClick}>00</button>
          <button onClick={handelClick}>0</button>
          <button onClick={handelClick}>.</button>
          <button id="equal" onClick={equal}>
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
