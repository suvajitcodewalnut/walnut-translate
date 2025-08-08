import { TbArrowNarrowRightDashed } from "react-icons/tb";

const Content = () => {
  return (
    <div className="mt-25 p-1">
      <div>
        <h2 className=" font-bold text-center text-4xl md:text-5xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-500 to-pink-500">
          CONVERSATIONS MADE EASY
        </h2>
        <p className="text-gray-400 text-center mt-5 font-semibold text-xs md:text-md lg:text-xl">
          Simply hold the mic and speak your heart out, let us handle the
          translation for you
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 md:gap-9 lg:gap-10 mt-20">
        <div
          className="text-white px-9 py-3 md:px-15 md:py-3 lg:px-20 lg:py-4 rounded-full 
                  bg-white/10 backdrop-blur-md border border-white/20 shadow-lg
                  transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:cursor-pointer"
        >
          English
        </div>
        <TbArrowNarrowRightDashed className="text-white" size={33} />
        <div
          className="text-white px-9 py-3 md:px-15 md:py-3 lg:px-20 lg:py-4 rounded-full 
                  bg-white/10 backdrop-blur-md border border-white/20 shadow-lg
                  transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:cursor-pointer"
        >
          Bengali
        </div>
      </div>
    </div>
  );
};

export default Content;
