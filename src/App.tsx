import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Skills from "./components/greet/skill/skill";
import Counter from "./components/greet/counter/counter";

function App() {
  const skills = ["HTML", "CSS"];
  return (
    <div className="App">
      {/* <Skills skills={skills} /> */}
      <Counter />
    </div>
  );
}

export default App;
