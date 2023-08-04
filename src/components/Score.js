import React, { useState } from "react";

const Score = () => {
 
  const [score, setScore] = useState(0);


  const addPoints = () => {
    setScore((prevScore) => prevScore + 100);
  };

  const subtractPoints = () => {
    setScore((prevScore) => prevScore - 100);
  };

  return (
    <div className="score">
    
      <h2>Score: {score}</h2>

    
      <button onClick={addPoints}>Add Points (+100)</button>
      <button onClick={subtractPoints}>Subtract Points (-100)</button>
    </div>
  );
};

export default Score;