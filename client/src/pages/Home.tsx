import Features from "@/components/home/Features";
import Footer from "@/components/home/Footer";
import Steps from "@/components/home/Steps";
import HomeLoader from "@/components/loaders/HomeLoader";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const loadImage = () => {
      const img = new Image();
      img.src =
        "https://img.freepik.com/premium-photo/fluid-round-3d-shape-liquid-splash-holographic-glass-motion-iridescent-liquid-sphere_116953-14431.jpg?w=740";
      img.onload = () => setImgLoaded(true);
      img.onerror = (err) => console.error("Failed to load image", err);
    };

    loadImage();
  }, []);

  const handleClick = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!imgLoaded) return <HomeLoader />;

  return (
    <motion.div>
      <header className="py-4 md:py-6">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* <div className="flex-shrink-0">
              <a
                href="#"
                title=""
                className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                <img
                  className="w-auto h-8"
                  src={logo}
                  alt=""
                />
              </a>
            </div> */}

            <h1>Mood Quest</h1>

            {/* <Logo /> */}

            <div className="flex lg:hidden">
              <button type="button" className="text-gray-900">
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="hidden lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center lg:space-x-8 xl:space-x-16">
              <button
                onClick={() => handleClick("features")}
                title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {" "}
                Features{" "}
              </button>

              <button
                onClick={() => handleClick("steps")}
                title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {" "}
                How It Works{" "}
              </button>

              <a
                href="#"
                title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {" "}
                About{" "}
              </a>

              <a
                href="#"
                title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {" "}
                Contact{" "}
              </a>
            </div>

            {/* Auth */}

            <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-8 xl:space-x-10">
              <a
                href="#"
                title=""
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {" "}
                Sign in{" "}
              </a>

              <a
                href="#"
                title=""
                className="px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Create free account
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}

      <motion.section
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="pb-12 sm:pb-16"
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
            <div>
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">
                  Track Your Mood, Transform Your Life
                </h1>
                <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">
                  Discover insights into your emotions through our interactive mood questionnaires.
                  Receive personalized recommendations to enhance your well-being and find balance.
                </p>

                <div className="mt-4 sm:mt-8 sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2">
                  <Link
                    to="/questionnaire"
                    className="inline-flex px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                <div className="flex items-center">
                  <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">2943</p>
                  <p className="ml-3 text-sm text-gray-900 font-pj">
                    Cards
                    <br />
                    Delivered
                  </p>
                </div>

                <div className="hidden sm:block">
                  <svg
                    className="text-gray-400"
                    width="16"
                    height="39"
                    viewBox="0 0 16 39"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                    <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                    <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                    <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                    <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
                  </svg>
                </div>

                <div className="flex items-center">
                  <p className="text-3xl font-medium text-gray-900 sm:text-4xl font-pj">$1M+</p>
                  <p className="ml-3 text-sm text-gray-900 font-pj">
                    Transaction
                    <br />
                    Completed
                  </p>
                </div>
              </div>
            </div>

            <div>
              <img
                className="w-full"
                src="https://img.freepik.com/premium-photo/fluid-round-3d-shape-liquid-splash-holographic-glass-motion-iridescent-liquid-sphere_116953-14431.jpg?w=740"
                alt=""
              />
            </div>
          </div>
        </div>
      </motion.section>

      <Features  />

       <div className="border mx-20" ></div>

      <Steps />
      <Footer />
    </motion.div>
  );
};
export default Home;
