import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { Button } from "../ui/button";

const Mission = () => {
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];

  return (
    <div className="mx-24 my-10 p-10 rounded-xl bg-[#313A34]">
      <div className="flex justify-between text-white gap-10">
        <div className="w-1/2">
          <Button className="mb-10 bg-transparent border hover:bg-transparent">Our Mussion</Button>

          <p  >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae perferendis odio,
            similique illum illo laborum consectetur recusandae omnis magni numquam itaque cum enim
            necessitatibus quod. Atque in placeat velit. Beatae laudantium delectus quod at non
            quidem, vel corporis expedita. Maiores.
          </p>
        </div>

        <div>
          <h1 className="font-bold text-3xl">We make quality telehealth accessible to everyone.</h1>
        </div>
      </div>

      <InfiniteMovingCards items={testimonials} direction="left" speed="normal" />
    </div>
  );
};

export default Mission;
