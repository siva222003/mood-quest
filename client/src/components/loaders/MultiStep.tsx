import { MultiStepLoader as Loader } from "../ui/multi-step-loader";

interface MultiStepLoaderProps {
  loading: boolean;
}

const loadingStates = [
  {
    text: "Analyzing your mood responses...",
  },
  {
    text: "Generating personalized recommendations...",
  },
  {
    text: "Curating content just for you...",
  },
  {
    text: "Finalizing your recommendations...",
  },
];


export default function MultiStepLoader({ loading }: MultiStepLoaderProps) {
  return (
    <div className="w-full text-lg h-screen flex items-center justify-center bg-gray-200">
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />
    </div>
  );
}
