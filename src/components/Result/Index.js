import React from "react";
import vid from "../../assets/vid.mp4";
// import img from "../../assets/bg.jpg";
import "./Result.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Results() {
  AOS.init();
  return (
    <div className="results-container m-auto">
      <div className="laye">
        <div className="nav flex justify-content-between">
          <a href="https://www.coursecre8her.com/" target="_blank">
            <img
              src="//images.squarespace-cdn.com/content/v1/5efc9e5963165f56c48cc40b/1595900528516-D7JK0M6W0BOTWI9X4KCU/Course+Cre8Her+Logo.png?format=1500w"
              alt="Course Cre8Her"
            />
          </a>
        </div>
        {/* BODY */}
        {/* <h2 class="title">
          <span class="title-word title-word-1">click here </span>
        </h2> */}

        <div className="results-content font-primary">
          <div className="flex flex-row video-wrap">
            <img
              data-aos="zoom-in-right"
              width="150"
              height="164"
              src="https://www.amyporterfield.com/wp-content/uploads/2022/07/click-to-watch.png"
              class="arrow click-img"
              alt="click to watch"
              loading="lazy"
              srcset="https://www.amyporterfield.com/wp-content/uploads/2022/07/click-to-watch.png 880w, https://www.amyporterfield.com/wp-content/uploads/2022/07/click-to-watch-632x700.png 632w, https://www.amyporterfield.com/wp-content/uploads/2022/07/click-to-watch-768x850.png 768w"
              sizes="(max-width: 880px) 100vw, 880px"
            ></img>
            {/* <div className=" "> */}
            <video
              class="video"
              controls
              autoplay
              width="500"
              height="400"
              src={vid}
              type="video/mp4"
            ></video>
            {/* <img src={img} alt="" width="500" class="video" height="400" /> */}
            {/* </div> */}
          </div>

          <div className="results-text-margin">
            <h2
              class="color-primary "
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              YOUR COURSE TOPIC IS "{" "}
              <span className="text-underline text-underline-offset-1">
                {localStorage.getItem("result")}
              </span>
              "
            </h2>
            <p>
              Based on your responses, your primary focus now should be on
              creating a digital product, that maximizes your skills and
              knowledge on this topic. Your expertise and passion for it are
              undeniable, and coupled with the current market demand, this could
              be a great avenue for you to explore.
            </p>
            <p>
              Right now, in this very moment, you are at a bit of a
              “crossroads,” and in an awesome position to take this new found
              clarity and leverage what you know to go after the life and
              business you have always dreamed of.
            </p>
            <p>
              These quiz results were designed to rid you of any confusion or
              doubt around what your topic should be, and set you on a path to
              confident creation. But, as they say, “the fortune is in the
              follow-up”. So, that part is up to you. But not to worry at all,
              I’m here — rooting you on every step of the way
            </p>
            <p>Warmest Regards, Brandhyze</p>
          </div>
        </div>
        {/* <video width="500px" height="500px" controls="controls">
          <source src={vid} type="video/mp4" />
        </video> */}
        <br />
      </div>
    </div>
  );
}
