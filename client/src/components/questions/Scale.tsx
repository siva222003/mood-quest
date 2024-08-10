
const Scale = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-[#7a7a7a] text-xl">Question 2</h2>

      <h1 className="text-[#313131] text-3xl font-semibold my-2">
        How satisfied are you with the feature?
      </h1>

      <div className="flex gap-1 md:gap-7 mt-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <div
            key={i}
            className="bg-[#f7f7f4] border-2 cursor-pointer rounded-lg flex flex-col justify-center items-center px-5 py-3 gap-3"
          >
            <h4>{i}</h4>
          </div>
        ))}
      </div>
      <div className="flex justify-between my-4">
        <h3 className="text-sm font-semibold text-gray-600">Low</h3>

        <h3 className="text-sm font-semibold text-gray-600">High</h3>
      </div>
    </div>
  );
};

export default Scale;
