import "./App.css";
import { useState } from "react";

function App() {
  // const [firstname, setfirstname] = useState("Jatin thakur");
  const [data, setdata] = useState(0);
  function increase(e) {
    // console.log("You Clicked me");
    // console.log(e.target.textContent);
    // e.target.textContent = "You Clicked me";
    // if (firstname === "Jatin thakur") {
    //   setfirstname("jatinnnn");
    // } else {
    //   setfirstname("Jatin thakur");
    // }
    setdata(data + 1);
  }

  function reset() {
    setdata(0);
  }
  function decrease() {
    setdata(data - 1);
  }
  return (
    <>
      <h1>{data}</h1>

      <button onClick={increase}> increase</button>
      <button onClick={reset}> reset</button>
      <button onClick={decrease}> decrease</button>

      <h2>nice guys</h2>
    </>
  );
}

export default App;
