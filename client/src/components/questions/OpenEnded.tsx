import { Textarea } from "@/components/ui/textarea";

const OpenEnded = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-[#7a7a7a] text-xl">Question 4</h2>

      <h1 className="text-[#313131] text-3xl font-semibold my-2">
        Describe how you sre feeling right now?
      </h1>

      <Textarea className="mt-8 bg-gray-100" rows={8} placeholder="Write here" />
    </div>
  );
};

export default OpenEnded;
