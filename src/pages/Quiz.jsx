import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import Question from "../components/Question";
import Summary from "./Summary";
import RestartQuiz from "../components/RestartQuiz";

export default function Quiz({ topic }) {
  const [userAnswers, setUserAnswers] = useState([]);

  const topicQuestions = QUESTIONS.filter((question) => question.topic === topic);
  
  const activeQuestionIndex = userAnswers.length;
  
  const quizIsFinished = activeQuestionIndex >= topicQuestions.length;

  const handleSelectAnswer = useCallback(function (selectedAnswer) {
    setUserAnswers((prev) => {
      return [...prev, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (quizIsFinished) {
    return <Summary userAnswers={userAnswers} topicQuestions={topicQuestions} />;
  }

  return (
    <>
      <RestartQuiz />
      <div id="quiz">
        <Question
          key={activeQuestionIndex}
          index={activeQuestionIndex}
          onSelectAnswer={handleSelectAnswer}
          onSkipAnswer={handleSkipAnswer}
          topicQuestions={topicQuestions}
        />
      </div>
    </>
  );
}
