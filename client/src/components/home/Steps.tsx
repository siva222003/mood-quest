

// const Steps = () => {
//   return (
//     <section className="bg-[#fbfbfb] rounded-2xl py-20 flex flex-col justify-center items-center ">
//       <h1 className="text-gray-col text-4xl font-bold">How it works?</h1>

//       {[1, 2, 3, 4].map((_, index) => (
//         <div className="bg-white text-[#647067] text-xs font-bold my-4 flex items-center px-5 py-5 rounded-3xl justify-between gap-10">
//           <p>0{index + 1}</p>

//           <div className="flex gap-3">
//             <div className="bg-blue-500 h-12 w-12 rounded-2xl"></div>

//             <div className="flex flex-col justify-center">
//               <h1 className="text-gray-col text-lg font-bold">Create an account</h1>
//               <p className="text-[#647067]">
//                 Our platform employs state-of-the-art algorithms and machine learning to assist
//                 healthcare professionals.
//               </p>
//             </div>
//           </div>

//           <svg
//             width="16"
//             height="12"
//             viewBox="0 0 20 14"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M17.1708 8H1C0.447715 8 0 7.55228 0 7C0 6.44772 0.447715 6 1 6H17.1708C17.0725 5.73746 16.8907 5.44118 16.5313 5.01793C16.1308 4.54612 15.5711 3.98532 14.7674 3.18162L13.2929 1.70711C12.9024 1.31658 12.9024 0.683418 13.2929 0.292893C13.6834 -0.0976311 14.3166 -0.0976311 14.7071 0.292893L16.2119 1.79767C16.9782 2.56399 17.5964 3.18215 18.056 3.72358C18.5293 4.28106 18.893 4.82271 19.0984 5.45492C19.4247 6.45913 19.4247 7.54087 19.0984 8.54508C18.893 9.17729 18.5293 9.71894 18.056 10.2764C17.5964 10.8179 16.9783 11.436 16.2119 12.2023L14.7071 13.7071C14.3166 14.0976 13.6834 14.0976 13.2929 13.7071C12.9024 13.3166 12.9024 12.6834 13.2929 12.2929L14.7674 10.8184C15.5711 10.0147 16.1308 9.45388 16.5313 8.98207C16.8907 8.55882 17.0725 8.26254 17.1708 8Z"
//               fill="#313A34"
//             />
//           </svg>

//         </div>
//       ))}
//     </section>
//   );
// };

// export default Steps;


const Steps = () => {
  
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">How does it work?</h2>
                    <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                </div>

                <div className="relative mt-12 lg:mt-20">
                    <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                        <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
                    </div>

                    <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700"> 1 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Create a free account</h3>
                            <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>

                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700"> 2 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Build your website</h3>
                            <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>

                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span className="text-xl font-semibold text-gray-700"> 3 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Release & Launch</h3>
                            <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Steps;