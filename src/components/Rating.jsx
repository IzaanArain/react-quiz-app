import React from 'react'
import { LiaStarSolid } from "react-icons/lia";

const Rating = ({ difficulty }) => {

  let starComponent = <></>
  switch (difficulty) {
    case 'hard':
      starComponent = (
        <>
          <LiaStarSolid />
          <LiaStarSolid />
          <LiaStarSolid />
        </>
      );
      break;
    case "easy":
      starComponent = (
        <>
          <LiaStarSolid />
        </>
      );
      break;
    case "medium":
      starComponent = (
        <>
          <LiaStarSolid />
          <LiaStarSolid />
        </>
      );
      break;
    default:
      return starComponent
  }

  return starComponent;
}

export default Rating