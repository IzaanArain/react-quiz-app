import React from 'react'
import { LiaStarSolid } from "react-icons/lia";
import { FaRegStar } from "react-icons/fa6";


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

  let starComponent = <></>
  switch (difficulty) {
    case 'hard':
      starComponent = (
        <>
          <LiaStarSolid />
          <LiaStarSolid />
          <LiaStarSolid />
          <FaRegStar />
          <FaRegStar />
        </>
      );
      break;
    case "easy":
      starComponent = (
        <>
          <LiaStarSolid />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </>
      );
      break;
    case "medium":
      starComponent = (
        <>
          <LiaStarSolid />
          <LiaStarSolid />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </>
      );
      break;
    default:
      return starComponent
  }
  return starComponent;
}

export default Rating