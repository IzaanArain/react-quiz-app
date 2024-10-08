import React, { useEffect, useState } from 'react'
import Rating from './Rating';
import { shuffleArray, removeEntertainment } from '../utils/helpers';
const Question = (props) => {
  const {
    total,
    index,
    category,
    type,
    difficulty,
    question,
    correct_answer,
    incorrect_answers = [],
    status,
    handleAnswer,
  } = props;
  const [choices, setChoices] = useState([]);

  useEffect(() => {
    setChoices((prev) => (shuffleArray([...prev, ...incorrect_answers, correct_answer])))
    return () => {
      setChoices([]);
    }
  }, [correct_answer, incorrect_answers]);

  return (
    <div className='question-box'>
      <h1>{`Question ${index + 1} of ${total}`}</h1>
      <p className='category-text'>Entertainment: {removeEntertainment(decodeURIComponent(category))}</p>
      <Rating difficulty={difficulty} />
      <p className='question-text'>{decodeURIComponent(question)}</p>
      <div className='choice-list'>
        {
          choices.map((choice, i) => {
            return (
              <div className='choice-box' key={i}>
                <button
                  onClick={() => {
                    handleAnswer(decodeURIComponent(choice))
                  }}
                  className='choice-btn'
                >
                  {decodeURIComponent(choice)}
                </button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Question