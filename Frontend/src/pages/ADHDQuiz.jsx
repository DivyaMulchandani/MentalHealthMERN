import React, { useState, useEffect } from "react";
import AdhdResult from "../components/AdhdResult";
import ".././App.css";


const ADHDQuiz = () => {
  const questions = [
    {
      question: "Do you often have trouble paying attention?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Are you easily distracted?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
   {
      question: "Do you have trouble staying organized?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you have trouble following through on instructions?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you fidget or squirm a lot?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you have trouble sitting still?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you have trouble waiting your turn?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you often interrupt others?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you have trouble controlling your impulses?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you often feel restless or have trouble relaxing?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you have trouble paying attention to details?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
  ];

  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };

  const updateScore = () => {
    const answerValue = clickedOption; // Use the clicked option as the answer value

    setScore((prevScore) => prevScore + answerValue);
  };

  const handleResetClick = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
    setClickedOption(0);
  };

  const isQuizOver = currentQuestion === questions.length;
  const handleSubmit = () => {
    const handleSubmit = () => {
      // Calculate the score based on the selected options
      const answerValue = clickedOption;
      
      // Add the score for the current question
      setScore((prevScore) => prevScore + answerValue);
      
      // Hide the submit button
      document.getElementById("submit-button").style.display = "block;";
      
      // You can add any other logic you need here
    };
    
  }; 
  return (
    <div className="ADHDQuiz">
      <div className="container">
        <h1 className="heading-txt">ADHD TEST</h1>
        {!isQuizOver ? (
          <div>
            <h2 className="question">{questions[currentQuestion].question}</h2>
            <div className="option-container">
              {questions[currentQuestion].answers.map((answer, answerIndex) => (
                <button
                  className={`option-btn ${
                    clickedOption === answerIndex + 1 ? "checked" : null
                  }`}
                  key={answerIndex}
                  onClick={() => setClickedOption(answerIndex + 1)}
                >
                  {answer}
                </button>
              ))}
            </div>
            <input type="button" value="Next" id="next-button" onClick={changeQuestion} />
          </div>
        ) : (
          <div>
            <h2 className="result-heading">Your Score</h2>
            <p className="score">{score}</p>
            {isQuizOver && !showResult ?  (
            <button onClick={handleSubmit} id="submit-button"className='button'>
              Submit
              </button>
              ) : null}
            
            {score > 1 ? <AdhdResult score={score} /> : null}
            <button onClick={handleResetClick} className="button">
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ADHDQuiz;
