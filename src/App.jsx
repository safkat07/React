import { useState } from "react";
import "./App.css";
import Counter from "./counter";
import Team from "./team";
import Users from "./users";
import Friend from "./friend";
import Friends from "./friends";


function App() {
  function handleClick() {
    alert("Button Clicked");
  }
  const handleClick2 = () => {
    alert("Button click 2");
  };
  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h1>React 2</h1>
      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      {/* <button onClick={handleClick}>Click me</button> <br />
      <button onClick={handleClick2}>Click 2</button>
      <br />
      <button onClick={() => alert('3rd clicked')}>3rd button </button>
      <button onClick={() => addToFive(10)}>Add five
      </button> */}
    </>
  );
}

export default App;
