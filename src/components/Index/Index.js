import React from "react";
import "./Main.css";

function Main() {
  return (
    <div>
      {/* nav */}
      <div className="nav">
        <a href="https://www.coursecre8her.com/" target="_blank">
          <img
            src="//images.squarespace-cdn.com/content/v1/5efc9e5963165f56c48cc40b/1595900528516-D7JK0M6W0BOTWI9X4KCU/Course+Cre8Her+Logo.png?format=1500w"
            alt="Course Cre8Her"
          />
        </a>
      </div>
      {/* body */}
      <div className="text-align-center">
        <button className="main-btn font-primary">START QUIZ !</button>
      </div>
    </div>
  );
}

export default Main;
