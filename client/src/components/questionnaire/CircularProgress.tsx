

interface CircleProgressProps {
  value: number;
  max: number;
}

const CircleProgress = ({ value, max }: CircleProgressProps) => {
  const radius = 50; // Radius of the circle
  const strokeWidth = 6; // Stroke width for the value circle
  const circumference = 2 * Math.PI * radius;   
  const progress = (value / max) * circumference;
  const offset = circumference - progress;

  return (
    <div className="flex items-center justify-center">
      <svg
        className="w-32 h-32"
        width="200"
        height="200"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="text-gray-200"
          cx="100"
          cy="100"
          r={radius}
          strokeWidth="2"
          fill="none"
        />
        <circle
          className="text-blue-500"
          cx="100"
          cy="100"
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          fill="none"
          strokeLinecap="round"
          transform="rotate(-90 100 100)"
        />
        <text
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
          className="text-xl font-semibold text-gray-700"
        >
          {value}%
        </text>
      </svg>
    </div>
  );
};

export default CircleProgress;
