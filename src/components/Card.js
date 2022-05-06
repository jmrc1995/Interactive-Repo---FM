import React from "react";
import "../styles/card.css";
import star from  '../assets/images/icon-star.svg'
import Error from "./Error";



export default function Card({currentNumber, updateNumber, setisSubmitted}) {
  return (
    <>
      <div className="card-container">

      {/* {setisSubmitted && !currentNumber ? <Error /> : null} */}
      
        <button className="favorite-circle">
         <img src={star} alt='star icon'/>
        </button>

        <h2> How did we do?</h2>

        <p>
          {" "}
          Please let us know how we did with your support request. All feedback
          is appreciated to help is imporve opur offering!
        </p>
        <div className="flex-row spread mg-top-sm">
          <button
            onClick={() => {
              updateNumber(1);
            }}
            className="button-rate"
          >
            {1}
          </button>
          <button
            onClick={() => {
              updateNumber(2);
            }}
            className="button-rate"
          >
            {2}
          </button>
          <button
            onClick={() => {
              updateNumber(3);
            }}
            className="button-rate"
          >
            {3}
          </button>
          <button
            onClick={() => {
              updateNumber(4);
            }}
            className="button-rate"
          >
            {4}
          </button>
          <button
            onClick={() => {
              updateNumber(5);
            }}
            className="button-rate"
          >
            {5}
          </button>
        </div>
        <div className="submit-button flex-row center">
          <button onClick={()=>{setisSubmitted(true)}} >
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
}




