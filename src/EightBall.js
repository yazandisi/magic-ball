import React, { useState } from "react";
import "./EightBall.css";
import questions from "./questions";
function EightBall() {
  let idx = Math.floor(Math.random() * questions.length);

  const [question, setQuestion] = useState("What is your question");
  const [bgColor, setBgColor] = useState("black");
  return (
    <div
      className="EightBall"
      onClick={() => {
        setQuestion(questions[idx].msg);
        setBgColor(questions[idx].color);
      }}
      style={{
        backgroundColor: bgColor,
        color: bgColor === "black" ? "white" : "black",
      }}
    >
      <p className="EightBall-p">{question}</p>
    </div>
  );
}

export default EightBall;
