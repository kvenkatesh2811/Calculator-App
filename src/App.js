import "./App.css";
import Keypad from "./components/keypad/Keypad";
import { useState } from "react";
import { Parser } from "expr-eval";

function App() {
  const [input, setInput] = useState("");
  function handleClick(value) {
    setInput(input + value);
  }
  function calculator() {
    try {
      const parser = new Parser();
      let outputVal = parser.evaluate(input);
      setInput(outputVal.toString());
    } catch (error) {
      setInput("Error");
    }
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
