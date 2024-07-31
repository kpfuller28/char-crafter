export default function Question({ question, onAnswer, options }) {
  return (
    <div>
      <p>{question}</p>
      {options.map((option) => {
        return (
          <button
            onClick={() => {
              onAnswer(option);
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
