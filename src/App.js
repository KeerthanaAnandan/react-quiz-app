// import MainPage from "./components/Index/Main";

import QuizPage from "./components/Quiz/Index";

import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  AOS.init();
  return (
    <div>
      {/* <MainPage /> */}
      <QuizPage />
    </div>
  );
}

export default App;
