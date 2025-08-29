import "./App.css";
import Keypad from "./components/keypad/Keypad";
import { useState } from "react";
function App() {
  const [input, setInput] = useState("");
  function handleClick(value) {
    // console.log("value",value)
    setInput(input + value);
    // console.log("input+value",input+value)
  }
  function calculator() {
    let outputVal = eval(input);
    setInput(outputVal);
  }
  function handleClear() {
    setInput("");
  }

  return (
    <div className="container">
      <h1 className="title">
        Calculator App using <span className="heading">React</span>
      </h1>
      <div className="calculator"></div>
      <input type="text" className="output" value={input} />
      <Keypad
        handleClick={handleClick}
        calculator={calculator}
        handleClear={handleClear}
      />
    </div>
  );
}

export default App;
