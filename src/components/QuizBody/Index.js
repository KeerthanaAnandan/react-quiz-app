import React, { useState, useEffect } from "react";
import "./QuizBody.css";
//import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//import { Link } from "react-router-dom";

export default function QuizBody() {
  // const history = useHistory();
  const navigate = useNavigate();
  //stupid
  const [error, setError] = useState("");
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [third, setThird] = useState(null);
  const [fourth, setFourth] = useState(null);
  const [fifth, setFifth] = useState(null);
  const [sixth, setSixth] = useState(null);
  const [count, setCount] = useState(0);
  const [option, setOption] = useState(["", "", "", ""]);
  const [data, setData] = useState([
    {
      question:
        "Which course topics excite you the most and would you like to build your successful online course around (name all that apply, short answers are best, up to 4)?",
      options: [],
    },
    {
      question:
        // "Which topic [of answers given in Question #1] best personifies how you see yourself and your brand?",
        "Which one of these topics best personifies how you see yourself and your brand?",
      options: [],
    },
    {
      question:
        // "What communities/types of people are interested in the topics you want to teach (ie twenty-somethings out of college, retirees, minority moms etc)?",
        "Out of the audiences interested in each of these topics, which one of these audiences are you most passionate about teaching?",
      options: [],
    },
    {
      question:
        "Out of the responses given in Question 3, which of these communities/groups are you most passionate about teaching?",
      options: [],
    },
    {
      question:
        // "Have you done a search on your course topic? Where have you seen the most interest and demand in the market?",
        "Have you done a search on your course topic? where would you say that you have seen the most interest and demand in the market?",
      options: [],
    },
    {
      question:
        "Would a course on [response to Question 1] solve an urgent pain point or frustration for your audience?",
      options: [],
    },
    {
      question:
        "What topic area [from Question 1] do you have the most authority, proven results, or a track record?",
      options: [],
    },
  ]);
  useEffect(() => {
    // localStorage.setItem("count", count + 1);
    window.localStorage.setItem("count", count + 1);
    window.dispatchEvent(new Event("storage"));
  }, [count]); // <-- here put the parameter to listen
  // const [data, setData] = useState([
  //   "Which topic [of answers given in Question #1] best personifies how you see yourself and your brand?",
  //   "What communities/types of people are interested in the topics you want to teach (ie twenty-somethings out of college, retirees, minority moms etc)?",
  //   "Out of [X,Y,Z = responses given in Question 3], which of these communities/groups are you most passionate about teaching?",
  //   "Have you done a search on your course topic? Where have you seen the most interest and demand in the market?",
  //   " Would a course on [response to Question 1] solve an urgent pain point or frustration for your audience?",
  //   ". What topic area [from Question 1] do you have the most authority, proven results, or a track record?",
  // ]);
  // function handleChange(e) {
  //   console.log("success", e.target.value);
  //   setZero(e.target.value);
  //   // localStorage.setItem('first' ,e.target.value )
  // }
  function handleChangeOne(e) {
    console.log("success1", e.target.value);

    setFirst(e.target.value);
  }
  function handleChangeTwo(e) {
    console.log("success2", e.target.value);
    setSecond(e.target.value);
  }
  function handleChangeThree(e) {
    console.log("success3", e.target.value);
    setThird(e.target.value);
  }
  function handleChangeFour(e) {
    console.log("success4", e.target.value);
    setFourth(e.target.value);
  }
  function handleChangeFive(e) {
    console.log("success5", e.target.value);
    setFifth(e.target.value);
  }
  function handleChangeSix(e) {
    console.log("success5", e.target.value);
    setSixth(e.target.value);
  }
  function nextHandler() {
    let mycount = 0;
    if (count == 0) {
      option.map((itm) => {
        if (itm.trim() != "") {
          mycount++;
          console.log("in", mycount);
          setError("");
          data.map((itm) => {
            itm.options = option;
          });
          if (mycount == 4) {
            setCount(count + 1);
          }
          // if (count < 5) {

          //   setCount(count + 1);

          // }
        } else {
          setError("Fill in all required fields");
        }
      });
    }
    if (count == 1) {
      if (first != "") {
        setError("");
        setCount(count + 1);
      } else {
        setError("Select any option!");
      }
    }
    if (count == 2) {
      if (second != "") {
        setError("");
        setCount(count + 1);
      } else {
        setError("Select any option!");
      }
    }
    if (count == 3) {
      if (third != "") {
        setError("");
        setCount(count + 1);
      } else {
        setError("Select any option!");
      }
    }
    if (count == 4) {
      if (fourth != "") {
        setError("");
        setCount(count + 1);
      } else {
        setError("Select any option!");
      }
    }
    if (count == 5) {
      if (fifth != "") {
        setError("");
        setCount(count + 1);
      } else {
        setError("Select any option!");
      }
    }
    if (count == 6) {
      if (sixth != "") {
        setError("");
        setCount(count + 1);
      } else {
        setError("Select any option!");
      }
    }
    // if (count == 5) {
    //   // history.push("/home");
    //   console.log(zero, first, second, third, fourth, fifth);
    // }
  }
  function finalNextHandler() {
    if (sixth != "") {
      setError("");
      goNext();
      console.log("final going ");
    } else {
      setError("Select any option!");
    }
  }
  function goNext() {
    // console.log(first, second, third, fourth, fifth);
    let arr = [first, second, third, fourth, fifth, sixth];
    // console.log(arr, "arr");
    // arr.map((itm) => {
    //   console.log(itm);

    // });
    var arr1 = [first, second, third, fourth, fifth, sixth];
    var mf = 1;
    var m = 0;
    var item;
    for (var i = 0; i < arr1.length; i++) {
      for (var j = i; j < arr1.length; j++) {
        if (arr1[i] == arr1[j]) m++;
        if (mf < m) {
          mf = m;
          item = arr1[i];
        }
      }
      m = 0;
    }
    console.log(item + " ( " + mf + " times ) ");
    // let result = option.map.find((itm, i) => i == item);

    console.log(option[item]);
    localStorage.setItem("result", option[item]);
    // history.push("/results");
    navigate("/results");
  }
  function previousHandler() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  function handleInputChange(e, index) {
    console.log(index, e.target.value);
    // option.map((item, j) => {
    //   if (j === index) {
    //     return e.target.value;
    //   } else {
    //     return item;
    //   }
    // });
    console.log(option);
    let newArr = [...option]; // copying the old datas array
    newArr[index] = e.target.value; // replace e.target.value with whatever you want to change it to

    setOption(newArr);
    // setOption((option) => {
    //   const list = option.list.map((item, j) => {
    //     if (j === index) {
    //       return e.target.value;
    //     } else {
    //       return item;
    //     }
    //   });

    //   return {
    //     list,
    //   };
    // });
    // setOption((option[index] = e.target.value));
  }
  return (
    // className="flex align-items-center justify-content-center
    <div className="quiz-body-container ">
      <br></br>
      {/* 
      {count} */}
      <div className=" quiz-question">
        {count + 1}. {data[count].question}
      </div>
      <br />

      {count == 0 ? (
        <div data-aos="fade-up">
          <form>
            {/* value={itm.question} */}
            {option.map((itm, index) => (
              <input
                key={index}
                value={option[index]}
                type="text"
                id="fname"
                name="fname"
                className="text"
                placeholder="Type your answer..."
                maxlength="10"
                onChange={(event) => handleInputChange(event, index)}
                // onChange={handleInputChange(option[0])}
              />
            ))}
          </form>
        </div>
      ) : (
        <div>
          {" "}
          <form
            name={`form${count}`}
            className="quiz-option-container"
            action="#"
          >
            {/* <fieldset id={`group${count}`}> */}
            {/* {option.map((itm, index) => ( */}
            {/* {data[count].options.map((itm, index) => (
                <p key={index}>
                  <input
                    value={`v${count}${index}`}
                    type="radio"
                    id={`q${count}${index}`}
                    name={`q${count}`}
                    onChange={handleChange}
                  />
                  <label htmlFor={`q${count}${index}`}>
                    {itm} q{count}
                    {index}
                    name: q{count}
                  </label>
                </p>
              ))} */}

            {/* {count == 1 && (<div></div>)}
           
             {count == 1 && (<div></div>)} */}
            {/* {count == 0 && (
              <div>
                {" "}
                {data[0].options.map((itm, index) => (
                  <p key={index}>
                    <input
                      value={index}
                      type="radio"
                      id={`q${0}${index}`}
                      name={`q${0}`}
                      onChange={handleChange}
                    />
                    <label htmlFor={`q${0}${index}`}>{itm}</label>
                  </p>
                ))}
              </div>
            )} */}
            {count == 1 && (
              <div>
                {" "}
                {data[1].options.map((itm, index) => (
                  <p key={index}>
                    <input
                      value={index}
                      type="radio"
                      id={`q${1}${index}`}
                      name={`q${1}`}
                      checked={index == first}
                      onChange={handleChangeOne}
                    />
                    <label htmlFor={`q${1}${index}`}>{itm}</label>
                  </p>
                ))}
              </div>
            )}
            {count == 2 && (
              <div>
                {data[2].options.map((itm, index) => (
                  <p key={index}>
                    <input
                      value={index}
                      type="radio"
                      id={`q${2}${index}`}
                      name={`q${2}`}
                      checked={index == second}
                      onChange={handleChangeTwo}
                    />
                    <label htmlFor={`q${2}${index}`}>{itm}</label>
                  </p>
                ))}
              </div>
            )}
            {count == 3 && (
              <div>
                {data[3].options.map((itm, index) => (
                  <p key={index}>
                    <input
                      value={index}
                      type="radio"
                      id={`q${3}${index}`}
                      name={`q${3}`}
                      checked={index == third}
                      onChange={handleChangeThree}
                    />
                    <label htmlFor={`q${3}${index}`}>{itm}</label>
                  </p>
                ))}
              </div>
            )}
            {count == 4 && (
              <div>
                {data[4].options.map((itm, index) => (
                  <p key={index}>
                    <input
                      value={index}
                      type="radio"
                      id={`q${4}${index}`}
                      name={`q${4}`}
                      checked={index == fourth}
                      onChange={handleChangeFour}
                    />
                    <label htmlFor={`q${4}${index}`}>{itm}</label>
                  </p>
                ))}
              </div>
            )}
            {count == 5 && (
              <div>
                {data[5].options.map((itm, index) => (
                  <p key={index}>
                    <input
                      value={index}
                      type="radio"
                      id={`q${5}${index}`}
                      name={`q${5}`}
                      checked={index == fifth}
                      onChange={handleChangeFive}
                    />
                    <label htmlFor={`q${5}${index}`}>{itm}</label>
                  </p>
                ))}
              </div>
            )}
            {count == 6 && (
              <div>
                {data[6].options.map((itm, index) => (
                  <p key={index}>
                    <input
                      value={index}
                      type="radio"
                      id={`q${6}${index}`}
                      name={`q${6}`}
                      checked={index == sixth}
                      onChange={handleChangeSix}
                    />
                    <label htmlFor={`q${6}${index}`}>{itm}</label>
                  </p>
                ))}
              </div>
            )}
            {/* </fieldset> */}
            {/* {data.map((itm, index) => ( */}
            {/* <p>
              <input
                value="1"
                type="radio"
                id="test1"
                name="radio-group"
                onChange={handleChange}
              />
              <label htmlFor="test1">Apple</label>
            </p> */}
            {/* ))} */}
            {/* <p>
              <input
                value="1"
                type="radio"
                id="test1"
                name="radio-group"
                onChange={handleChange}
              />
              <label htmlFor="test1">Apple</label>
            </p>
            <p>
              <input
                value="2"
                type="radio"
                id="test2"
                name="radio-group"
                onChange={handleChange}
              />
              <label htmlFor="test2">Peach</label>
            </p>
            <p>
              <input
                value="3"
                type="radio"
                id="test3"
                name="radio-group"
                onChange={handleChange}
              />
              <label htmlFor="test3">Orange</label>
            </p> */}
          </form>
        </div>
      )}
      {/* <input value={option[1]} type="text" id="fname" name="fname" />
      <input value={option[2]} type="text" id="fname" name="fname" />
      <input value={option[3]} type="text" id="fname" name="fname" /> */}
      <p className="error">{error}</p>
      <br />
      <br />
      <div className="quiz-bottom-content flex flex-row">
        {/* <!--onClick={previousHandler}--> */}
        <div
          onClick={previousHandler}
          className="quiz-bottom-btn btn-inactive cursor-pointer"
        >
          PREVIOUS
        </div>

        <div className="flex align-items-center justify-content-center">|</div>
        {/* <div
          className="quiz-bottom-btn btn-active cursor-pointer"
          onClick={nextHandler}
        >
          NEXT
        </div> */}

        {count < 6 ? (
          <div
            className="quiz-bottom-btn btn-active cursor-pointer"
            onClick={nextHandler}
            type="submit"
          >
            NEXT
          </div>
        ) : (
          // <Link
          //   className="quiz-bottom-btn btn-active cursor-pointer"
          //   to="/results"
          //   onClick={finalNextHandler}
          // >
          //   NEXT
          // </Link>
          <div
            className="quiz-bottom-btn btn-active cursor-pointer"
            to="/results"
            onClick={finalNextHandler}
          >
            NEXT
          </div>
        )}
      </div>
      {/* <Link className="quiz-bottom-btn btn-active cursor-pointer" to="/results">
        NEXT
      </Link> */}
    </div>
  );
}
