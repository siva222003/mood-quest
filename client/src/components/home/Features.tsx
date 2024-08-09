import React from "react";
import { Button } from "../ui/button";

const Features = () => {
  return (
    <section className="px-24">
      <div className="flex my-10 justify-around">
        <div className="w-[26%]">
          <h1 className="text-gray-col mb-2 font-semibold text-4xl">
            Interactive Mood Questionnaire
          </h1>

          <p className="text-[#647067] my-7">
            Our platform employs state-of-the-art algorithms and machine learning to assist
            healthcare professionals in accurate diagnosis and treatment planning.
          </p>

          <Button className="bg-gray-col mt-2"> Start Test </Button>
        </div>

        <div className="bg-[#84CC16] h-[22rem] w-[20rem] rounded-3xl"></div>
      </div>

      <div className="flex my-10 justify-around">
        <div className="bg-[#84CC16] h-[22rem] w-[20rem] rounded-3xl"></div>

        <div className="w-[26%]">
          <h1 className="text-gray-col mb-2 font-semibold text-4xl">
            Interactive Mood Questionnaire
          </h1>

          <p className="text-[#647067] my-7">
            Our platform employs state-of-the-art algorithms and machine learning to assist
            healthcare professionals in accurate diagnosis and treatment planning.
          </p>

          <Button className="bg-gray-col mt-2"> Start Test </Button>
        </div>
      </div>

      <div className="flex my-10 justify-around">
        <div className="w-[26%]">
          <h1 className="text-gray-col mb-2 font-semibold text-4xl">
            Interactive Mood Questionnaire
          </h1>

          <p className="text-[#647067] my-7">
            Our platform employs state-of-the-art algorithms and machine learning to assist
            healthcare professionals in accurate diagnosis and treatment planning.
          </p>

          <Button className="bg-gray-col mt-2"> Start Test </Button>
        </div>

        <div className="bg-[#84CC16] h-[22rem] w-[20rem] rounded-3xl"></div>
      </div>
    </section>
  );
};

export default Features;
