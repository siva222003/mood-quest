import { MultiStepLoader as Loader } from "../ui/multi-step-loader";

interface MultiStepLoaderProps {
  loading: boolean;
}

const loadingStates = [
  {
    text: "Buying a condo",
  },
  {
    text: "Travelling in a flight",
  },
  {
    text: "Meeting Tyler Durden",
  },
  {
    text: "He makes soap",
  },
  {
    text: "We goto a bar",
  },
  {
    text: "Start a fight",
  },
  {
    text: "We like it",
  },
  {
    text: "Welcome to F**** C***",
  },
];

export default function MultiStepLoader({ loading }: MultiStepLoaderProps) {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-blue-200">
        {loading}
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />
    </div>
  );
}
