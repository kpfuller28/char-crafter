export default function Question({ question, onAnswer, options }) {
  return (
    <div className="fade">
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
