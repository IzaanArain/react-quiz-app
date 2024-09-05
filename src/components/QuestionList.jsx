import React, { useEffect, useState } from 'react'
import data from '../../questions.json'
import Question from './Question';

const QuestionList = () => {
  const [progress,seProgress] = useState(0);
  const [questions, setQuestion] = useState([]);

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
        console.log(data);
        setQuestion(data)
      } catch (err) {
        console.error("error", err.message)
      }
    })()
  }, []);

  return (
    <div>
      <ol>
        {questions && questions.map((ques, i) => {
          return (
            // <li key={i}>
            //   <p>{decodeURIComponent(ques?.question)}</p>
            // </li>
            <li key={i}>
              <Question
                total={questions.length}
                index={i}
                category={ques?.category}
                type={ques?.type}
                difficulty={ques?.difficulty}
                question={ques?.question}
                correct_answer={ques?.correct_answer}
                incorrect_answers={ques?.incorrect_answers}
              />
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default QuestionList;