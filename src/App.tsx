import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import Question from "./Components/Question";

const questions = [
  "Do you have a class in mind that you'd like to play?",
  "Do you have a race in mind that you'd like to play?",
  "Do you have a background in mind that you'd like to play?",
  "In combat, do you want to use weapons, cast spells, or a mix of both?",
  "Do you want to be a standard race or something more exotic?",
  "Do you want to fight in melee or ranged combat?",
  "How would you like to assign ability scores? (Ask your DM if you're not sure)"
];
const options = [
  ["Yes", "No"],
  ["Yes", "No"],
  ["Yes", "No"],
  ["Use Weapons", "Cast Spells", "A Mix of Both"],
  ["Standard", "Exotic", "Don't Know"],
  ["Melee", "Ranged"],
  ["Standard Array", "Point Buy", "Roll for Stats"]
];

function App() {
  const [count, setCount] = useState(0);
  // const [monsters, setMonsters] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [optionIndex, setOptionIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [races, setRaces] = useState([]);
  const url = "https://www.dnd5eapi.co/graphql";
  const raceQuery = `
          query Monsters {
            monsters {
              armor_class {
                value
                type
              }
              name
            }
          }`;
  // useEffect(() => {
  //   axios
  //     .post(
  //       url,
  //       { query: query },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       setMonsters(response.data.data.monsters);
  //       console.log("MONSTER LIST: ", monsters);
  //     });
  // }, []);

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
        <div>
          <div>Here is your character</div>
          <ul style={{ listStyleType: "none" }}>
            {answers.map((answer) => {
              return <li>{answer}</li>;
            })}
          </ul>
        </div>
      )}

      {/* <ul>
        {monsters.map((monster) => {
          return (
            <div>
              <li>{monster.name}</li>
              <li>{monster.armor_class[0].value}</li>
            </div>
          );
        })}
      </ul> */}

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
