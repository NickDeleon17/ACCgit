import React from "react";
import { diceFace } from "./helper";

const Die = ({ value }) => {
  return (
    <div>
      <i className={`fas fa-dice-${diceFace[value]}`}></i>
    </div>
  );
};
export default Die;
