import React, { useEffect, useState } from "react";
import Question from "./Question";
import data from "../../questions.json";
import ProgressBar from "./ProgressBar";

const Quiz = () => {
  const [questions, setQuestion] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState(null);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [currentlyAnswered, setCurrentlyAnswered] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [maximunProgress, setMaximunProgress] = useState(0);
  const [minimunProgress, setMinimunProgress] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        // const res = await fetch("./../questions.json", {
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'Accept': 'application/json'
        //   }
        // });
        // const data = await res.json();
        setQuestion(data);
        setCurrentQuestion(data[0]);
      } catch (err) {
        console.error("error", err.message);
      }
    })();
  }, []);

  useEffect(() => {
    setTotalQuestions(questions.length)
    setCurrentQuestion(questions[currentQuestionIndex]);

  }, [questions, currentQuestionIndex]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setStatus(null);
    } else if (currentQuestionIndex === totalQuestions - 1) {
      setStatus("Quiz Completed!");
    }
  };

  const handleAnswer = (selectedOption) => {
    const correctAnswer = decodeURIComponent(currentQuestion.correct_answer);
    if (status === null) {
      if (selectedOption === correctAnswer) {
        setScore((prev) => prev + 1);
        setStatus("Correct!");
      } else {
        setIncorrectAnswers((prev) => prev + 1);
        setStatus("Sorry!");
      }
    }
  };

  const calculateProgress = () => {
    let completedQuestions = currentQuestionIndex + 1;
    if (totalQuestions > 0 && currentQuestionIndex <= totalQuestions) {
      const currentProgressQuestion = Math.round(
        (completedQuestions / totalQuestions) * 100
      );
      setCurrentProgress(currentProgressQuestion);
      
      const currentlyAnsweredQuestions = Math.round(
        (score / completedQuestions) * 100
      );
      setCurrentlyAnswered(currentlyAnsweredQuestions);

      const minimumProgressQuestions = Math.round(
        (score / totalQuestions) * 100
      );
      setMinimunProgress(minimumProgressQuestions);

      const maximunProgressQuestions = Math.round(
        ((totalQuestions - completedQuestions) / totalQuestions) * 100
      );
      setMaximunProgress(maximunProgressQuestions);
    }
  };

  useEffect(() => {
    calculateProgress();
  }, [score, incorrectAnswers]);

  return (
    <div className="quiz-container">
      <div className="question-container">
        <div
          style={{ width: `${currentProgress}%` }}
          className="progress current-progress"
        ></div>
        <Question
          total={questions.length}
          index={currentQuestionIndex}
          category={currentQuestion?.category}
          type={currentQuestion?.type}
          difficulty={currentQuestion?.difficulty}
          question={currentQuestion?.question}
          correct_answer={currentQuestion?.correct_answer}
          incorrect_answers={currentQuestion?.incorrect_answers}
          handleNextQuestion={handleNextQuestion}
          status={status}
          handleAnswer={handleAnswer}
        />
        {status && (
          <div className="status-message">
            <h2>{status}</h2>
            <button onClick={handleNextQuestion} className="next-btn">
              Next Question
            </button>
          </div>
        )}
        <ProgressBar
          score={score}
          incorrectAnswers={incorrectAnswers}
          currentlyAnswered={currentlyAnswered}
          maximunProgress={maximunProgress}
          minimunProgress={minimunProgress}
        />
      </div>
    </div>
  );
};

export default Quiz;
