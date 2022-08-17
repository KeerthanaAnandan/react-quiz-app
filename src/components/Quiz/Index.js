import React, { useState } from "react";
import "./Quiz.css";
import QuizBody from "../QuizBody/Index";

export default function Quiz() {
  const [count, setCount] = useState(1);
  // window.addEventListener("count", (e) => {
  //   // setCount(localStorage.getItem('count'));
  //   setCount(e.target.value);
  //   console.log(e.target.value, "sus");
  // });
  window.addEventListener("storage", () => {
    console.log("change to local storage!");
    setCount(localStorage.getItem("count"));
  });
  return (
    <div className="quiz-container m-auto">
      <div className="layer">
        {/* NAVBAR */}
        <div className="nav flex justify-content-between">
          <a href="https://www.coursecre8her.com/" target="_blank">
            <img
              src="//images.squarespace-cdn.com/content/v1/5efc9e5963165f56c48cc40b/1595900528516-D7JK0M6W0BOTWI9X4KCU/Course+Cre8Her+Logo.png?format=1500w"
              alt="Course Cre8Her"
            />
          </a>
          <div className="quiz-count">{count}/7</div>
        </div>
        {/* BODY */}
        <QuizBody />
      </div>
    </div>
  );
}
