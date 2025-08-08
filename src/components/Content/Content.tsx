/** biome-ignore-all assist/source/organizeImports: <What the hell is this ? Why do we need is sorted> */
import SelectorBox from "../SelectorBox/SelectorBox";

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
      <SelectorBox />
    </div>
  );
};

export default Content;
