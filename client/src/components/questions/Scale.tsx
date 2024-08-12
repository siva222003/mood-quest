import { updateAnswers } from "@/helpers";
import { AnswerType, QuestionType } from "@/types";
import { motion } from "framer-motion";
import { useState } from "react";
interface ScaleProps {
  question: QuestionType;
  setAnswers: React.Dispatch<React.SetStateAction<AnswerType[]>>;
  currentQuestionIndex: number;
  currentSectionIndex: number;
}

const Scale = ({ question, setAnswers ,currentQuestionIndex,currentSectionIndex}: ScaleProps) => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (option: number) => {
    setSelected(option);
    
    setAnswers((prev) => {
      const updatedAnswers = updateAnswers(prev, question, option);
      return updatedAnswers;
    });
  };

  return (
    <div className="flex flex-col mx-3">
      <h2 className="text-[#978484] text-xl">Question {currentQuestionIndex+currentSectionIndex+1}</h2>

      <h1 className="text-[#313131] text-2xl lg:text-3xl font-semibold my-2">{question.questionText}</h1>

      <div className="w-fit">
        <div className="flex flex-wrap gap-3 md:gap-7 mt-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.93 }}
              key={i}
              onClick={() => handleSelect(i)}
              className={`border-2 ${
                selected === i ? "bg-blue-400 text-white" : "bg-slate-100"
              } cursor-pointer rounded-lg flex flex-col justify-center items-center px-5 py-3 gap-3`}
            >
              <h4>{i}</h4>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-between my-4 max-md:hidden">
          <h3 className="text-sm font-semibold text-gray-600">Low</h3>

          <h3 className="text-sm font-semibold text-gray-600">High</h3>
        </div>
      </div>
    </div>
  );
};

export default Scale;
