import React, { useState, useEffect } from "react";
// import QuizResult from '../components/QuizResult';
import DepressionResult from "../components/DepressionResult";


const DepressionQuiz = () => {
  const [questions, setQuestions] = useState([
    {
      question: "I have lost interest in activities I used to enjoy.",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "I have difficulty concentrating or making decisions.",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "I have feelings of worthlessness or guilt.",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "I have thoughts of death or suicide.",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "I have changes in my appetite.",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "I have changes in my sleep patterns.",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "I have decreased energy levels.",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "I have difficulty controlling my emotions.",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "I have physical aches and pains.",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "I have withdrawn from social activities.",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
  ]);

  // const handleQuestionChange = (index, value) => {
  //   setQuestions((questions) => {
  //     questions[index].value = value;
  //     return questions;
  //   });
  // };

  //   return (
  //     <div>
  //       <h1>Depression Quiz</h1>
  //       <ul>
  //         {questions.map((question, index) => (
  //           <li key={index}>
  //             <h3>{question.question}</h3>
  //             <select
  //               name={question.question}
  //               value={question.value}
  //               onChange={(e) => handleQuestionChange(index, e.target.value)}
  //             >
  //               <option value="Never">Never</option>
  //               <option value="Rarely">Rarely</option>
  //               <option value="Sometimes">Sometimes</option>
  //               <option value="Often">Often</option>
  //               <option value="Always">Always</option>
  //             </select>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // };

  const [score, setScore] = useState(0)


  const handleSubmit = () => {


    for (const question of questions) {
      const answerIndex = questions.indexOf(question);

      const answer = parseInt(document.querySelector(`input[type='radio'][name=answer-${answerIndex}]:checked`).value);
      console.log("asnwer:" + answer)
      setScore(prev => prev + answer)
    }

    document.getElementById("submit-button").classList.add("hidden")

  };

  useEffect(() => {
  }, [score])


  return (
    <div className="container">
      <h1 className="heading-txt">depression Test</h1>
      <div>
        {questions.map((question, index) => (
          <div key={index}>
            <h2 className="question">{question.question}</h2>
            <ul className="option-container">
              {question.answers.map((answer, answerIndex) => (
                <li key={answerIndex} id={`answer-${answerIndex}`} className="option">
                  <input
                    type="radio"
                    id={`answer-${index}-${answerIndex}`}
                    name={`answer-${index}`}
                    value={answerIndex + 1}
                  />
                  {answer}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button onClick={handleSubmit} id="submit-button">Submit</button>
      <div id="score">
        {score > 1 ? <DepressionResult score={score} /> : <></>}
      </div>
    </div>
  );
};

export default DepressionQuiz;