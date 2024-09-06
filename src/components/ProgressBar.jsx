import React, { useEffect, useState } from 'react'

const ProgressBar = (props) => {
  const {
    score,
    incorrectAnswers,
    currentlyAnswered,
    maximunProgress,
    minimunProgress
  } = props

  console.log({
    currentlyAnswered,
    maximunProgress,
    minimunProgress
  })
  return (
    <div className='progress-bar-container'>
      <div className='score-card'>
        <p>Score: {currentlyAnswered}%</p>
        <p>Max Score: {maximunProgress}%</p>
      </div>
      <div className='bar-container'>
        <div
          className="progress currently-answered-progress"
          style={{ width: `${currentlyAnswered}%` }}
        >
        </div>
        <div
          className="progress minimum-progress"
          style={{ width: `${minimunProgress}%` }}
        >
        </div>
        <div
          className="progress maximum-progress"
          style={{ width: `${maximunProgress}%` }}
        >
        </div>
      </div>
    </div>
  )
}

export default ProgressBar