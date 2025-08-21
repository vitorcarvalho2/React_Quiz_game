import quizLogo from "../assets/quiz-logo.png";

function Header() {
  return (
    <header id="header">
      <img src={quizLogo} alt="logo" />
      <h1>React Quiz</h1>
    </header>
  );
}

export default Header;
