import CircleProgress from "@/components/questionnaire/CircularProgress";
import Header from "@/components/questionnaire/Header";
import OpenEnded from "@/components/questionnaire/OpenEnded";
import ImageOptions from "@/components/questions/ImageOptions";
import RadioOptions from "@/components/questions/RadioOptions";
import Scale from "@/components/questions/Scale";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Questionnaire = () => {
  const [step] = useState(1);
  const [question, setQuestion] = useState(1);

  return (
    <section className="flex min-h-screen h-screen">
      <div className="bg-[#f9fafc] flex flex-col flex-1">
        <Header />
        <div className=" flex-1 flex flex-col  items-center justify-around">


          <AnimatePresence mode="wait">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col  items-center w-full"
            >
              {question === 1 && <ImageOptions key={question} />}
              {question === 3 && <RadioOptions key={question} />}
              {question === 2 && <Scale key={question} />}
              {question === 4 && <OpenEnded key={question} />}
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

      <div className="w-1/5 px-4 h-full md:flex flex-col justify-between py-10 hidden ">
        <CircleProgress value={step} max={100} />

        {/* <button 
          onClick={() => setStep(step + 10)}
          className="bg-[#3a7bf7] text-white px-8 py-4 rounded-lg"
        >Increase</button> */}

        <div className="flex justify-around text-gray-600 text-[14px] font-semibold">
          <h3>Step</h3>

          <h3>2/6</h3>
        </div>
      </div>
    </section>
  );
};

export default Questionnaire;
