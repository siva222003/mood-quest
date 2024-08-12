import { updateAnswers } from "@/helpers";
import { AnswerType, QuestionType } from "@/types";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
interface RadioOptionsProps {
  question: QuestionType;
  setAnswers: React.Dispatch<React.SetStateAction<AnswerType[]>>;
  currentQuestionIndex: number;
    currentSectionIndex: number;
}

const Chips = ({ question, setAnswers,currentQuestionIndex,currentSectionIndex }: RadioOptionsProps) => {
  const [selected, setSelected] = useState<number[] | null>(null);

  const isSelected = (option: number) => {
    if (selected === null) {
      return false;
    }

    return selected.includes(option);
  };

  const handleSelect = (option: number) => {
    setSelected((prev) => {
      if (prev === null) {
        return [option];
      }

      if (prev.includes(option)) {
        return prev.filter((el) => el !== option);
      }

      return [...prev, option];
    });
  };

  useEffect(() => {
    if (selected === null) {
      return;
    }

    const newAnswer = selected.map((index) => question.options![index].text);

    setAnswers((prev) => {
      const updatedAnswers = updateAnswers(prev, question, newAnswer);
      return updatedAnswers;
    });
  }, [selected]);

  return (
    <div className="flex flex-col mx-4">
      <h2 className="text-[#7a7a7a] text-xl">Question {currentQuestionIndex+currentSectionIndex+1}</h2>

      <h1 className="text-[#313131] text-2xl lg:text-3xl font-semibold my-2">
        {question.questionText}
      </h1>

      <div className="mt-6 gap-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {question.options?.map((option, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.93 }}
            onClick={() => handleSelect(index)}
            className={`flex items-center gap-x-3 ${
              isSelected(index) ? "bg-blue-400 text-white" : "border-2 bg-slate-100"
            } rounded-3xl p-3 cursor-pointer`}
          >
            <h2 className="block text-sm font-medium leading-6 ">{option.text}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Chips;
