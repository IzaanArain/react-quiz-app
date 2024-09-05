import React, { useEffect, useState } from 'react'
import Question from './Question'
import data from '../../questions.json';
import ProgressBar from './ProgressBar';

const Quiz = () => {
  const [questions, setQuestion] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [score, setScore] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [currentlyAnswered, setCurrentlyAnswered] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);

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
        setQuestion(data)
      } catch (err) {
        console.error("error", err.message)
      }
    })();
  }, []);

  useEffect(() => {
    setCurrentQuestion(questions[currentQuestionIndex])
  }, [questions, currentQuestionIndex]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  const handleAnswer = (selectedOption) => {
    const correctAnswer = decodeURIComponent(currentQuestion.correct_answer);
    if (selectedOption === correctAnswer) {
      setScore(prev => prev + 1);
    } else {
      setIncorrectAnswers((prev) => prev + 1)
    }
  };

  const calculateProgress = () => {
    if (currentQuestionIndex <= questions.length) {
      const currentProgressQuestion = Math.round(((currentQuestionIndex + 1) / questions.length) * 100);
      setCurrentProgress(currentProgressQuestion);
      const currentlyAnsweredQuestions = Math.round((score / (currentQuestionIndex + 1)) * 100)
      setCurrentlyAnswered(currentlyAnsweredQuestions);
    }
  };

  useEffect(() => {
    calculateProgress()
  }, [score, incorrectAnswers])

  // console.log("score", score);
  // console.log("incorrectAnswers", incorrectAnswers);
  // console.log("currentlyAnsweredQuestions", currentlyAnswered);


  return (
    <div className="quiz-container">
      <div className='question-container'>
        <div style={{ width: `${currentProgress}%` }} className='current-progress'></div>
        {currentQuestion && <Question
          total={questions.length}
          index={currentQuestionIndex}
          category={currentQuestion?.category}
          type={currentQuestion?.type}
          difficulty={currentQuestion?.difficulty}
          question={currentQuestion?.question}
          correct_answer={currentQuestion?.correct_answer}
          incorrect_answers={currentQuestion?.incorrect_answers}
          handleNextQuestion={handleNextQuestion}
          handleAnswer={handleAnswer}
        />}
        <ProgressBar
          score={score}
          incorrectAnswers={incorrectAnswers}
          currentlyAnswered={currentlyAnswered}
        />
      </div>
    </div>
  )
}

export default Quiz
