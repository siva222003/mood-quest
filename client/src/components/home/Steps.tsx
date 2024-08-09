

const Steps = () => {
  return (
    <section className="bg-[#F5F5F5] rounded-2xl py-20 mx-20 flex flex-col justify-center items-center ">
      <h1 className="text-gray-col text-4xl font-bold">How it works?</h1>

      {[1, 2, 3, 4].map((_, index) => (
        <div className="bg-white text-[#647067] text-xs font-bold my-4 flex items-center px-3 py-5 rounded-3xl justify-between gap-10">
          <p>0{index + 1}</p>

          <div className="flex gap-3">
            <div className="bg-[#84CC16] h-12 w-12 rounded-2xl"></div>

            <div className="flex flex-col justify-center">
              <h1 className="text-gray-col text-lg font-bold">Create an account</h1>
              <p className="text-[#647067]">
                Our platform employs state-of-the-art algorithms and machine learning to assist
                healthcare professionals.
              </p>
            </div>
          </div>

          <svg
            width="16"
            height="12"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.1708 8H1C0.447715 8 0 7.55228 0 7C0 6.44772 0.447715 6 1 6H17.1708C17.0725 5.73746 16.8907 5.44118 16.5313 5.01793C16.1308 4.54612 15.5711 3.98532 14.7674 3.18162L13.2929 1.70711C12.9024 1.31658 12.9024 0.683418 13.2929 0.292893C13.6834 -0.0976311 14.3166 -0.0976311 14.7071 0.292893L16.2119 1.79767C16.9782 2.56399 17.5964 3.18215 18.056 3.72358C18.5293 4.28106 18.893 4.82271 19.0984 5.45492C19.4247 6.45913 19.4247 7.54087 19.0984 8.54508C18.893 9.17729 18.5293 9.71894 18.056 10.2764C17.5964 10.8179 16.9783 11.436 16.2119 12.2023L14.7071 13.7071C14.3166 14.0976 13.6834 14.0976 13.2929 13.7071C12.9024 13.3166 12.9024 12.6834 13.2929 12.2929L14.7674 10.8184C15.5711 10.0147 16.1308 9.45388 16.5313 8.98207C16.8907 8.55882 17.0725 8.26254 17.1708 8Z"
              fill="#313A34"
            />
          </svg>
        </div>
      ))}
    </section>
  );
};

export default Steps;
