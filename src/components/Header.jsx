import quizLogo from "../assets/quiz-logo.png";
import RestartQuiz from "./RestartQuiz";

function Header() {
  return (
    <header id="header">
      <img src={quizLogo} alt="logo" />
      <h1>React Quiz</h1>
      <RestartQuiz />
    </header>
  );
}

export default Header;
