import { updateAnswers, updateLocalStorage } from "@/helpers";
import { AnswerType, QuestionType } from "@/types";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
interface BooleanProps {
  question: QuestionType;
  setAnswers: React.Dispatch<React.SetStateAction<AnswerType[]>>;
  currentCount: number;
}

const Boolean = ({ question, setAnswers, currentCount }: BooleanProps) => {
  const [selected, setSelected] = useState<"true" | "false" | null>(null);

  const handleSelect = (option: "true" | "false") => {
    setSelected(option);
    setAnswers((prev) => {
      const updatedAnswers = updateAnswers(prev, question, option);
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
    <div className="flex flex-col mx-4">
      <h2 className="text-[#7a7a7a] text-xl">Question {currentCount}</h2>

      <h1 className="text-[#313131] text-2xl lg:text-3xl font-semibold my-2">
        {question.questionText}
      </h1>

      <div className="flex gap-10 mt-8 justify-center">
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          onClick={() => handleSelect("true")}
          className={`bg-slate-100 ${
            selected === "true" ? "border-2" : ""
          } border-blue-300 cursor-pointer rounded-lg flex flex-col justify-center items-center px-10 py-5 gap-3`}
        >
          <img
            className="w-12 h-12"
            src="https://cdn.iconscout.com/icon/free/png-512/free-emoji-55-216464.png?f=webp&w=256"
            alt=""
          />

          <h4>Yes</h4>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          onClick={() => handleSelect("false")}
          className={`bg-slate-100 ${
            selected === "false" ? "border-2" : ""
          } border-blue-300 cursor-pointer rounded-lg flex flex-col justify-center items-center px-10 py-5 gap-3`}
        >
          <img
            className="w-12 h-12"
            src="https://cdn.iconscout.com/icon/free/png-512/free-emoji-76-216485.png?f=webp&w=256"
            alt=""
          />

          <h4>No</h4>
        </motion.div>
      </div>
    </div>
  );
};

export default Boolean;
