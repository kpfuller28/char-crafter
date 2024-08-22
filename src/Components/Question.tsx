import { Button } from "@/components/ui/button";

export default function Question({ question, onAnswer, options }) {
  return (
    <div className="fade">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        {question}
      </h4>
      {options.map((option) => {
        return (
          <Button
            className="m-1"
            // variant={"secondary"}
            onClick={() => {
              onAnswer(option);
            }}
          >
            {option}
          </Button>
        );
      })}
    </div>
  );
}
