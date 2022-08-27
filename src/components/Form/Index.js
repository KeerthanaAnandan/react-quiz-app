import React, { useState, useEffect } from "react";

import "./Form.css";

export default function Index() {
  const [userResult, setUserResult] = useState("");

  useEffect(() => {
    setUserResult(localStorage.getItem("result"));
  });
  return (
    <div>
      <div className="footer-container font-primary">
        <div className="layerr">
          <div className="wrapthat">
            <div className="card">
              <div id="mc_embed_signup">
                <form
                  action="https://coursecre8her.us10.list-manage.com/subscribe/post?u=a3d70db484b319638868cea43&amp;id=7052ac4f63&amp;f_id=008b30e2f0"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate"
                  noValidate
                >
                  <div id="mc_embed_signup_scroll">
                    <div>
                      <br />
                      <h2
                        style={{
                          color: "rgb(107, 106, 106)",
                          fontSize: "large",
                        }}
                        className="texts"
                      >
                        Great Job, You’ve Finished the Quiz!
                      </h2>

                      <p
                        style={{ color: "rgb(107, 106, 106)" }}
                        className="texts"
                      >
                        “We would like to keep in touch with you, tell us where
                        to find you ? and get recommendations based your results
                      </p>
                    </div>
                  </div>

                  <div className="mc-field-group">
                    <label htmlFor="mce-FNAME"> Name </label>
                    <input
                      type="text"
                      name="FNAME"
                      className=""
                      id="mce-FNAME"
                    />
                  </div>
                  <div className="mc-field-group">
                    <label htmlFor="mce-EMAIL">
                      Email Address <span className="asterisk">*</span>
                    </label>
                    <input
                      type="email"
                      name="EMAIL"
                      className="required email"
                      id="mce-EMAIL"
                    />
                  </div>

                  <div className="mc-field-group" id="hide">
                    <label htmlFor="mce-USERRESULT">Type </label>
                    <input
                      type="text"
                      name="USERRESULT"
                      className="usertype"
                      id="mce-USERRESULT"
                      defaultValue={userResult}
                    />
                  </div>

                  <div hidden={true}>
                    <input type="hidden" name="tags" />
                  </div>
                  <div id="mce-responses" className="clear">
                    <div
                      className="response"
                      id="mce-error-response"
                      style={{ display: "none" }}
                    ></div>
                    <div
                      className="response"
                      id="mce-success-response"
                      style={{ display: "none" }}
                    ></div>
                  </div>

                  <div
                    style={{ position: "absolute", left: -5000 }}
                    aria-hidden={true}
                  >
                    <input
                      type="text"
                      name="b_3a8d6f8f174409356f89b85f0_784412b43e"
                      tabIndex="-1"
                    />
                  </div>
                  <div className="clear">
                    <input
                      type="submit"
                      value="See My Results"
                      name="subscribe"
                      className="button"
                    />
                    <br />
                    <span style={{ fontSize: "small" }}>
                      Don't worry, we hate spam as much as you do. Unsubscribe
                      at any time.
                    </span>
                    <div>
                      <span style={{ fontSize: "medium" }}>
                        <a
                          className="skipcolor no-decoration"
                          href={process.env.PUBLIC_URL + "results.html"}
                        >
                          Skip subscription!
                        </a>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
