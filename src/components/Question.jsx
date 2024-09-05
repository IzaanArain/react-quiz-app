import React, { useEffect, useState } from 'react'
import Rating from './Rating';
import { shuffleArray } from '../utils/helpers';
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
    status ,
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
      <h5>{decodeURIComponent(category)}</h5>
      <Rating difficulty={difficulty} />
      <p>{decodeURIComponent(question)}</p>
      <div className='choice-list'>
        {
          choices.map((choice, i) => {
            return (
              <button key={i}
                onClick={() => {
                  handleAnswer(decodeURIComponent(choice))
                }}
                className='choice-box'>
                {decodeURIComponent(choice)}
              </button>
            )
          })
        }
      </div>
    </div>
  )
}

export default Question