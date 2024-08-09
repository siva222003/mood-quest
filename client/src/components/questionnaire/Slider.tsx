
const Test = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const divs = ["Div 1", "Div 2", "Div 3"]; // Replace with actual content

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % divs.length);
  // };

  // const handlePrevious = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + divs.length) % divs.length);
  // };

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div className=" text-[#373938] bg-[#f5f5f5] shadow-lg w-fit p-6 rounded-xl">
        <h2 className="text-2xl font-bold">What is your current mood?</h2>

        <ul className="my-2 font-semibold text-[#8a8b8b] flex gap-4 ">
          <li className="border bg-[#e4e4e4] w-20 p-2 rounded-lg  my-4 cursor-pointer">Bad</li>
          <li className="border bg-[#e4e4e4] w-20 p-2 rounded-lg  my-4 cursor-pointer">Ok</li>
          <li className="border bg-[#e4e4e4] w-20 p-2 rounded-lg  my-4 cursor-pointer">Neutral</li>
          <li className="border bg-[#86cc13] text-white w-20 p-2 rounded-lg  my-4 cursor-pointer">
            Good
          </li>
          <li className="border bg-[#e4e4e4] w-20 p-2 rounded-lg  my-4 cursor-pointer">Happy</li>
        </ul>
      </div>

      <h1>yes No</h1>

      <h1>Slider</h1>

      <h1>Scale</h1>

      <h1>Open Ended</h1>

      {/* <Carousel>
        <CarouselContent>
          <CarouselItem className="">
            {" "}
            <div className="shadow-lg w-fit p-6 rounded-lg">
              <h2>Q1. How often do you feel stress?</h2>

              <ul className="my-2">
                <li className="border border-blue-400 p-2 rounded-md my-4 cursor-pointer">
                  Regularly
                </li>
                <li className="border border-blue-400 p-2 rounded-md my-4 cursor-pointer">
                  Sometimes
                </li>
                <li className="border border-blue-400 p-2 rounded-md my-4 cursor-pointer">
                  Rarely
                </li>
                <li className="border border-blue-400 p-2 rounded-md my-4 cursor-pointer">Never</li>
              </ul>
            </div>
          </CarouselItem>
          <CarouselItem className="">
            <div className="shadow-lg w-fit p-6 rounded-lg">
              <h2>Q1. How often do you are being happy?</h2>

              <ul className="my-2">
                <li className="border border-blue-400 p-2 rounded-md my-4 cursor-pointer">
                  Regularly
                </li>
                <li className="border border-blue-400 p-2 rounded-md my-4 cursor-pointer">
                  Sometimes
                </li>
                <li className="border border-blue-400 p-2 rounded-md my-4 cursor-pointer">
                  Rarely
                </li>
                <li className="border border-blue-400 p-2 rounded-md my-4 cursor-pointer">Never</li>
              </ul>
            </div>
          </CarouselItem>
          <CarouselItem className="">
            <div className="shadow-lg w-fit p-6 rounded-lg">
              <h2>Q1. How often do you feel stress?</h2>

              <ul className="my-2">
                <li className="border border-blue-400 p-2 rounded-md my-4 cursor-pointer">
                  Regularly
                </li>
                <li className="border border-blue-400 p-2 rounded-md my-4 cursor-pointer">
                  Sometimes
                </li>
                <li className="border border-blue-400 p-2 rounded-md my-4 cursor-pointer">
                  Rarely
                </li>
                <li className="border border-blue-400 p-2 rounded-md my-4 cursor-pointer">Never</li>
              </ul>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}
    </div>
  );
};

export default Test;
