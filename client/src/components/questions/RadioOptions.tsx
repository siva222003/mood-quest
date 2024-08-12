import { updateAnswers, updateLocalStorage } from "@/helpers";
import { AnswerType, QuestionType } from "@/types";
import { IconVectorTriangle } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
interface RadioOptionsProps {
  question: QuestionType;
  setAnswers: React.Dispatch<React.SetStateAction<AnswerType[]>>;
  currentCount: number;
}

const RadioOptions = ({ question, setAnswers, currentCount }: RadioOptionsProps) => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (option: number) => {
    setSelected(option);

    const newAnswer = question.options![option].text;

    setAnswers((prev) => {
      const updatedAnswers = updateAnswers(prev, question, newAnswer);
      return updatedAnswers;
    });
  };

  useEffect(() => {
    const curr = updateLocalStorage(question, selected);
    if (curr !== null) {
      setSelected(curr);
    }
  }, [selected]);

  return (
    <div className="flex flex-col mx-3">
      <h2 className="text-[#7a7a7a] text-xl">Question {currentCount}</h2>

      <h1 className="text-[#313131] text-2xl lg:text-3xl font-semibold my-2">
        {question.questionText}
      </h1>

      <div className="mt-6 space-y-6 ">
        {question.options?.map((option, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.93 }}
            onClick={() => handleSelect(index)}
            className={`flex items-center gap-x-3 ${
              selected === index ? "bg-blue-400 text-white" : "border-2 bg-slate-100"
            } rounded-lg p-3 cursor-pointer`}
          >
            <h2 className="block text-sm font-medium leading-6 ">{index + 1}.</h2>

            <h2 className="block text-sm font-medium leading-6 ">{option.text}</h2>
          </motion.div>
        ))}

        {/* <div className="flex items-center gap-x-3 bg-blue-400 rounded-lg p-3 cursor-pointer">
          <h2 className="block text-sm font-medium leading-6 text-white">2.</h2>

          <h2 className="block text-sm font-medium leading-6 text-white">Something</h2>
        </div> */}
      </div>
    </div>
  );
};

export default RadioOptions;
