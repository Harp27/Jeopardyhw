import React from "react";
import "./App.css";
import Question from "./components/Question";
import Score from "./components/Score";

function App() {
  return (
    <div className="App">
      <h1>Jeopardy App</h1>
      <Question />
      <Score />
    </div>
  );
}

export default App;