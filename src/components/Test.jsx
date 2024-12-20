import { useState } from "react";
import "./Test.css";
import { useFetch } from "../hooks/useFetch";
import Result from "./Result";

//toast
import toast from "react-hot-toast";

function Test({ questions: { color, icon, questions, title } }) {
  console.log(icon);

  const [answeredQuestions, setAnsweredQuestions] = useState(1);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [statusDisabeled, setStatusDisabled] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  const handleSumbit = (e) => {
    e.preventDefault();
    const correctAnsver = questions[questionIndex].answer;

    if (selectedAnswer === null) {
      return toast.error("Plese ,selest an answer.");
    } else {
      if (selectedAnswer === correctAnsver) {
        setAnswerStatus("correct");
        setCorrectAnswerCount(correctAnswerCount + 1);
      } else {
        setAnswerStatus("incorrect");
      }
    }
    setShowNextButton(true);
    setStatusDisabled(true);
  };
  const handleNextQuestions = () => {
    setQuestionIndex(questionIndex + 1);
    setAnsweredQuestions(answeredQuestions + 1),
      setSelectedAnswer(null),
      setShowNextButton(false);
    setAnswerStatus(null), setStatusDisabled(false);
  };

  if (questionIndex === questions.length) {
    toast.success("Successfully toasted!", {
      icon: "🤙",
    });
    return (
      <Result
        title={title}
        console={color}
        icon={icon}
        correctAnswerCount={correctAnswerCount}
        questions={questions}
      />
    );
  }
  return (
    <div className="container">
      <div className="test">
        <div className="test-content">
          <p className="test-description">
            Question
            {answeredQuestions} of {questions.length}
          </p>
          <h1 className="test-title">{questions[questionIndex].question}</h1>
          <div className="test-proccess-container">
            <div
              className="test-proccess"
              style={{
                width: (answeredQuestions / questions.length) * 100 + "%",
              }}
            ></div>
          </div>
        </div>
        <div className="test-questions">
          <form onSubmit={handleSumbit}>
            <ul className="test-list">
              {questions[questionIndex].options.map((option, index) => {
                const alphabet = String.fromCharCode(65 + index);

                let ClassName = "";
                if (answerStatus == "correct" && option == selectedAnswer) {
                  ClassName = "correct";
                } else if (answerStatus == "incorrect") {
                  if (option == selectedAnswer) {
                    ClassName = "incorrect";
                  }
                  if (option == questions[questionIndex].answer) {
                    ClassName = "correct";
                  }
                }

                return (
                  <li key={option}>
                    <label className={`test-label ${ClassName} `}>
                      <span className="test-lette">{alphabet}</span>
                      <input
                        disabled={statusDisabeled}
                        type="radio"
                        name="option"
                        onChange={() => setSelectedAnswer(option)}
                      />
                      <span className="testt-text">{option}</span>
                      {/* icon */}
                      <img
                        className="test-icon-correct"
                        src="../assets/icon-correct.svg"
                        alt="icon"
                        width={40}
                        height={40}
                      />
                      <img
                        className="test-icon-incorrect"
                        src="../assets/icon-incorrect.svg"
                        alt="icon"
                        width={40}
                        height={40}
                      />
                    </label>
                  </li>
                );
              })}
            </ul>
            {!showNextButton && (
              <button className="btn test-btn">Submit Question</button>
            )}
            {showNextButton && (
              <button className="btn test-btn" onClick={handleNextQuestions}>
                {questions.length == answeredQuestions
                  ? "Finish"
                  : "Next Question"}
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Test;
