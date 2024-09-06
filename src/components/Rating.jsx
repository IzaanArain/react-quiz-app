import React, { useEffect, useState } from 'react'
import { LiaStarSolid } from "react-icons/lia";
import { FaRegStar } from "react-icons/fa6"

const Rating = ({ difficulty }) => {

  const difficultyObj = {
    hard: 3,
    medium: 2,
    easy: 1
  }

  const solidStars = difficultyObj[difficulty] || 0;
  const stars = [
    ...Array(solidStars).fill(<LiaStarSolid />),
    ...Array(5 - solidStars).fill(<FaRegStar />),
  ];

  return (<>{stars}</>);
}

export default Rating;