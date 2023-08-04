import React, { useState } from "react";

const Question = () => {

  const [questionData, setQuestionData] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const fetchRandomTrivia = async () => {
   
    fetch("http://jservice.io/api/random")
      .then((response) => {
      
        if (response.ok) {
      
          return response.json();
        } else {
    
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
     
        if (data && Array.isArray(data) && data.length > 0) {
       
          setQuestionData(data[0]);
         
          setShowAnswer(false);
        } else {
       
          throw new Error("Invalid data received from the API");
        }
      })
      .catch((error) => {
    
        console.error("Error fetching random trivia:", error);
      });
  };


  const toggleAnswerVisibility = () => {
    setShowAnswer((prevShowAnswer) => !prevShowAnswer);
  };

  return (
    <div className="question">

      {questionData && (
        <>
          <h2>Category: {questionData.category.title}</h2>
          <p>Points: {questionData.value}</p>
          <p>Question: {questionData.question}</p>
        </>
      )}

      <button onClick={fetchRandomTrivia}>Random Trivia Question</button>

      {showAnswer && questionData && (
        <div>
          <h3>Answer:</h3>
          <p>{questionData.answer}</p>
        </div>
      )}


      <button onClick={toggleAnswerVisibility}>
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>
    </div>
  );
};

export default Question;
