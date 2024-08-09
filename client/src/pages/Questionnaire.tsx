import CircleProgress from "@/components/questionnaire/CircularProgress";
import Header from "@/components/questionnaire/Header";
import ImageOptions from "@/components/questions/ImageOptions";
import { Button } from "@/components/ui/button";
import React from "react";

const Questionnaire = () => {
  return (
    <section className="flex h-screen max-h-screen">
      <div className="bg-[#f9fafc] flex flex-col flex-1 justify-evenly">
        <Header />

        <div className=" flex-1 flex flex-col mx-24  items-center justify-around">

          <ImageOptions />

      <div className="flex justify-around w-full">
        <Button className="bg-white text-black hover:bg-transparent px-8 py-6 border-2">Previous</Button>

        <Button className="px-8 py-6 bg-[#3a7bf7]">Continue</Button>
      </div>
    </div>

      </div>

      <div className="w-1/5 px-4 h-full md:flex flex-col justify-between py-10 hidden ">
        <CircleProgress value={50} max={100} />

        <div className="flex justify-around text-gray-600 text-[14px] font-semibold">
          <h3>Step</h3>

          <h3>2/6</h3>
        </div>
      </div>
    </section>
  );
};

export default Questionnaire;
