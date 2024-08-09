
const RadioOptions = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-[#7a7a7a] text-xl">Question 3</h2>

      <h1 className="text-[#313131] text-3xl font-semibold my-2">
        What is your favourite colour as black?
      </h1>

      {/* <div className="flex gap-1 md:gap-7 mt-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <div
            key={i}
            className="bg-[#f7f7f4] border-2 cursor-pointer rounded-lg flex flex-col justify-center items-center px-5 py-3 gap-3"
          >
            <h4>{i}</h4>
          </div>
        ))}
      </div> */}

      <div className="mt-6 space-y-6 ">
        <div className="flex items-center gap-x-3 bg-slate-200 rounded-lg p-3 cursor-pointer">
          <h2 className="block text-sm font-medium leading-6 text-gray-900">1.</h2>

          <h2 className="block text-sm font-medium leading-6 text-gray-900">Everything</h2>
        </div>

        <div className="flex items-center gap-x-3 bg-blue-400 rounded-lg p-3 cursor-pointer">
          <h2 className="block text-sm font-medium leading-6 text-white">2.</h2>

          <h2 className="block text-sm font-medium leading-6 text-white">Something</h2>
        </div>

        <div className="flex items-center gap-x-3 bg-slate-200 rounded-lg p-3 cursor-pointer">
          <input
            id="push-nothing"
            name="push-notifications"
            type="radio"
            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
          <label
            htmlFor="push-nothing"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            No push notifications
          </label>
        </div>
      </div>
    </div>
  );
};

export default RadioOptions;
