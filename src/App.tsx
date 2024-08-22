import { useEffect, useState } from "react";
import "./App.css";
import Question from "./Components/Question";
import { characterDecider } from "./helpers/characterDecider.ts";
import ClassInfo from "./Components/ClassInfo.tsx";
const questions = [
  "Do you want to weapon, cast spells, or a bit of both?",
  "Do you want to be melee or ranged?",
  "Do you want to be a human, elf, dwarf, halfling?",
];

/*
weapon, melee = fighter
weapon, ranged = rogue
spells, melee = cleric
spells, ranged = wizard
both, melee = paladin
both, ranged = ranger
*/
const options = [
  ["Weapon", "Spells", "Both"],
  ["Melee", "Ranged"],
  ["Human", "Elf", "Dwarf", "Halfling"],
];

function App() {
  const [count, setCount] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [optionIndex, setOptionIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [characterClass, setCharacterClass] = useState("");

  function handleAnswer(answer) {
    setFade(true);
    setTimeout(() => {
      setAnswers([...answers, answer]);
      setOptionIndex(optionIndex + 1);
      setQuestionIndex(questionIndex + 1);
      if (questionIndex === questions.length - 1) {
        setCharacterClass(() => characterDecider(answers));
      }
      setFade(false);
    }, 500);
  }

  return (
    <>
      <h1>Welcome Adventurer</h1>

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
          <div>
            You clearly want to play a {answers[2]} {characterClass}
          </div>
          <div>Here are your answers bitch</div>
          <ul style={{ listStyleType: "none" }}>
            {answers.map((answer) => {
              return <li>{answer}</li>;
            })}
          </ul>
          <ClassInfo characterClass={characterClass} />
          <button
            onClick={() => {
              setFade(true);
              setTimeout(() => {
                setOptionIndex(0);
                setQuestionIndex(0);
                setAnswers([]);
                setCharacterClass("");
                setFade(false);
              }, 500);
            }}
          >
            Go Back to Beginning
          </button>
        </div>
      )}

      <div className="card">
        <button onClick={() => setCount((count) => count + 69)}>
          This is Nate's newest update 8/2 is {count}
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
