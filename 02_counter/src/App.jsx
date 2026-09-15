import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  // let counter = 0;

  const addValue = () => {
    // console.log("clicked", counter);

    // counter = counter + 1;
    // setCounter(counter) // both works same
    // setCounter(counter + 1);

    setCounter((prevCounter) => {
      if(prevCounter >= 21)
        return prevCounter

      return prevCounter + 1
    })
  };

  const reduceValue = () => {
    // setCounter(counter - 1);

    setCounter((prevCounter) => {
      if(prevCounter <= 0)
        return prevCounter

      return prevCounter - 1
    })
  };

  const resetValue = () => {
    setCounter(0);
  };

  return (
    <div className="counter-app">
      <h1>Let's Start!</h1>

      <p>Counter</p>

      <div className="counter-value">{counter}</div>

      <div className="buttons">
        <button
          id="decrease"
          onClick={reduceValue}
          aria-label="Decrease counter">
          −
        </button>

        <button id="reset" onClick={resetValue}>
          Reset
        </button>

        <button id="increase" onClick={addValue} aria-label="Increase counter">
          +
        </button>
      </div>
    </div>
  );
}

export default App;
