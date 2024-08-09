const ImageOptions = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-[#7a7a7a] text-xl">Question 1</h2>

      <h1 className="text-[#313131] text-3xl font-semibold my-2">
        Were you able to follow my instructions?
      </h1>

      <div className="flex gap-7 mt-8 flex-wrap">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="bg-[#f7f7f4] cursor-pointer rounded-lg flex flex-col justify-center items-center px-10 py-5 gap-3">
            <img
              className="w-12 h-12"
              src="https://cdn.iconscout.com/icon/free/png-512/free-angry-169-450433.png?f=webp&w=256"
              alt=""
            />

            <h4>Never</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageOptions;
