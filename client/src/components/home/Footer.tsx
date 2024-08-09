

const Footer = () => {
  return (
    <div className="bg-gray-col relative rounded-t-[6rem] mx-1 mt-4 overflow-hidden py-40">

        <div className="rounded-[15rem] h-full bg-[#48524B] absolute w-full top-0 -left-3/4" >

        </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white text-3xl font-bold ">Mood Quest</h1>

        <p className="text-[#E3E4E3] text-xs">
          Our mission is to revolutionize telehealth & telemedicine industry with the power of
          personalized AI.
        </p>

        <div className="flex-col flex gap-4">
          <h1 className="text-white text-3xl font-bold ">Home Page</h1>
          <h1 className="text-white text-3xl font-bold ">About Us</h1>
          <h1 className="text-white text-3xl font-bold ">Services</h1>
          <h1 className="text-white text-3xl font-bold ">Contact Us</h1>
        </div>
      </div>

      <div className="rounded-[15rem] h-full bg-[#48524B] absolute w-full top-0 -right-3/4" >

        </div>

    </div>
  );
};

export default Footer;
