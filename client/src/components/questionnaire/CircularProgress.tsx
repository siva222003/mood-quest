import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface CircleProgressProps {
  value: number;
  max: number;
}

const CircleProgress = ({ value, max }: CircleProgressProps) => {
  return (
    <div className="flex justify-center">
      <CircularProgressbar
        value={value}
        maxValue={max}
        text={`${value}%`}
        strokeWidth={4}
        className="w-[170px]"
        styles={buildStyles({
          pathTransitionDuration: 0.5,
          pathColor: "#3a7bf7",
          textColor: "#3a7bf7",
          trailColor: "#d6d6d6",
        })}
      />
    </div>
  );
};

export default CircleProgress;
