import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Skills from "./components/greet/skill/skill";

function App() {
  const skills = ["HTML", "CSS"];
  return (
    <div className="App">
      <Skills skills={skills} />
    </div>
  );
}

export default App;
