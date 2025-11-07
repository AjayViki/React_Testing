import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Skills from "./components/greet/skill/skill";
import Counter from "./components/greet/counter/counter";
import { AppProviders } from "./components/greet/providers/app-providers";
import { MuiMode } from "./components/mui/mui-mode";

function App() {
  const skills = ["HTML", "CSS"];
  return (
    <AppProviders>
      <div className="App">
        {/* <Skills skills={skills} /> */}
        {/* <Counter /> */}
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
