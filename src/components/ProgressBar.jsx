import React, { useEffect, useState } from 'react'

const ProgressBar = ({ score, incorrectAnswers, currentlyAnswered }) => {
  // console.log("score", score);
  // console.log("incorrectAnswers", incorrectAnswers);
  // console.log("currentlyAnswered", currentlyAnswered);

  return (
    <div className='progress-bar-container'>
      <div className='score-card'>
        <p>Score: {currentlyAnswered}%</p>
        <p>Max Score: 75%</p>
      </div>
      <div className='bar-container'>
        <div
          className="progress currently-answered-progress"
          style={{ width: `${currentlyAnswered}%` }}
        >
        </div>
        <div
          className="progress minimum-progress"
          style={{ width: `50%` }}
        >
        </div>
        <div
          className="progress maximum-progress"
          style={{ width: `75%` }}
        >
        </div>
      </div>
    </div>
  )
}

export default ProgressBar