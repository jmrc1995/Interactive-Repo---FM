import React, { useState } from "react";
import Card from "./Card";
import "../styles/ratings.css";
import Thanks from "./Thanks";
import Error from "./Error";

function Ratings() {
  const [isSubmitted, setisSubmitted] = useState(false);
  const [currentNumber, setNumber] = useState(null);

  function updateNumber(num) {
    setNumber(num);
    console.log(num);
  }

  function onSubmit() {
    setisSubmitted(true);
  }
  return (
    <div className="ratingsContainer">
      {/* {!isSubmitted && <Card updateNumber = {updateNumber} setisSubmitted={setisSubmitted} />} */}

      {/* {isSubmitted && <Thanks setisSubmitted={setisSubmitted} currentNumber = {currentNumber} />} */}

      {isSubmitted && currentNumber ? <Thanks setisSubmitted={setisSubmitted} currentNumber = {currentNumber} /> : <Card currentNumber = {currentNumber} updateNumber = {updateNumber} setisSubmitted={setisSubmitted} />}

     
    </div>
  );
}

export default Ratings;
