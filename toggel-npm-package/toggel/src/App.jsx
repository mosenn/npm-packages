import { useState } from "react";

import { Toggel } from "reactjs-nextjs-darkmode";
import "./App.css";

function App() {
  const darkMode = Toggel();
  const { isDark, activeDarkMode, styleOption } = darkMode;

  console.log(isDark);
  console.log(activeDarkMode);
  console.log(styleOption.backgroundColor);
  styleOption.backgroundColor = "red";
  styleOption.color = "blue";
  return (
    <div
      style={{
        backgroundColor: isDark && styleOption.backgroundColor,
        color: isDark && styleOption.color,
      }}
    >
      <h1>hi react</h1>
      <h1>Dark mode is {isDark ? "on" : "off"}</h1>
      <button onClick={activeDarkMode}>toggel</button>
    </div>
  );
}

export default App;
