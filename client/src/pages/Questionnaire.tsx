import Header from "@/components/questionnaire/Header";
import OpenEnded from "@/components/questionnaire/OpenEnded";
import ImageOptions from "@/components/questions/ImageOptions";
import RadioOptions from "@/components/questions/RadioOptions";
import Scale from "@/components/questions/Scale";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Questionnaire = () => {
  // const [step] = useState(1);
  const [question, setQuestion] = useState(1);

  return (
    <section className="flex min-h-screen h-screen">
      <div className="bg-[#f9fafc] flex flex-col flex-1">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-around">
          <AnimatePresence mode="wait">
            <motion.div
              key={question}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              // exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center w-full"
            >
              {question === 1 && <ImageOptions />}
              {question === 3 && <RadioOptions />}
              {question === 2 && <Scale />}
              {question === 4 && <OpenEnded />}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-around w-full mt-4">
            <Button
              onClick={() => setQuestion(question - 1)}
              disabled={question === 1}
              className="bg-white text-black hover:bg-transparent px-8 py-6 border-2"
            >
              Previous
            </Button>

            <Button
              onClick={() => setQuestion(question + 1)}
              disabled={question === 4}
              className="px-8 py-6 bg-[#3a7bf7]"
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questionnaire;
