import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
    console.log("add value");
  };

  const removeValue = () => {
    setCounter(counter - 1);
    console.log("remove value");
  };

  const counterValue = () => {};
  return (
    <>
      <h1>Count with Me {counter}</h1>
      <h2>Counter Value :{counter}</h2>
      <button onClick={addValue}> Add Value </button> {""}
      <button onClick={removeValue}>Remove Value</button>
      <p>Footer:{counter}</p>
    </>
  );
}

export default App;
