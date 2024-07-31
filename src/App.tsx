import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Question from "./Components/Question";

const questions = [
  "Do you want to weapon, cast spells, or a bit of both?",
  "Do you want to be a human, elf, dwarf, halfling?",
  "Do you want to be melee or ranged?",
];
const options = [
  ["Weapon", "Spells", "Both"],
  ["Human", "Elf", "Dwarf", "Halfling"],
  ["Melee", "Ranged"],
];

function App() {
  const [count, setCount] = useState(0);
  // const [monsters, setMonsters] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [optionIndex, setOptionIndex] = useState(0);
  const [fade, setFade] = useState(false);

  function handleAnswer(answer) {
    setFade(true);
    setTimeout(() => {
      setAnswers([...answers, answer]);
      setQuestionIndex(questionIndex + 1);
      setOptionIndex(optionIndex + 1);
      setFade(false);
    }, 500);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome Nate</h1>

      {questionIndex < questions.length ? (
        <div className={`fade ${fade ? "fade-enter" : "fade-exit"}`}>
          <Question
            question={questions[questionIndex]}
            onAnswer={handleAnswer}
            options={options[optionIndex]}
          />
        </div>
      ) : (
        <div className={`fade ${fade ? "fade-enter" : "fade-exit"}`}>
          <div>Here are your answers bitch</div>
          <ul style={{ listStyleType: "none" }}>
            {answers.map((answer) => {
              return <li>{answer}</li>;
            })}
          </ul>
          <button
            onClick={() => {
              setFade(true);
              setTimeout(() => {
                setOptionIndex(0);
                setQuestionIndex(0);
                setAnswers([]);
                setFade(false);
              }, 500);
            }}
          >
            Go Back to Beginning
          </button>
        </div>
      )}

      <div className="card">
        <button onClick={() => setCount((count) => count + 1000)}>
          THIS IS KIELS UPDATE FOR ONE LAST TEST is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and Nate to Nate HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Nate and Nate logos to learn more
      </p>
    </>
  );
}

export default App;
