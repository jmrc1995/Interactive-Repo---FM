import React from "react";
import thanks from "../assets/images/illustration-thank-you.svg";
import "../styles/thanks.css";

function Thanks({currentNumber, setisSubmitted}) {
  return (
    <>
      <div className="thanks-container center">
        <img 
            src={thanks} 
            className='ty-illustration mg-tp-bt-lg'
            alt="star icon" />

        <p className="border-radius">You selected {currentNumber}  out of 5</p>

        <h2> Thank you!</h2>

        <p className="thanks-paragraph">
          {" "}
          We appreciate you taking the time to give a rating.
          If you ever need more support, don't hesitate to get in touch!
        </p>
        <div className="back-button flex-row center">
          <button onClick={()=>{setisSubmitted(false)}} >
            Another review?
          </button>
        </div>

      </div>
    </>
  );
}

export default Thanks;
