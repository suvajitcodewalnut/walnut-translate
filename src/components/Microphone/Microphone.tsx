/** biome-ignore-all assist/source/organizeImports: <What the hell is this ? Why do we need is sorted> */
import { useState } from "react";

// Modules
import { FaMicrophoneLines } from "react-icons/fa6";
import { BiSolidSquareRounded } from "react-icons/bi";

const Microphone = () => {
  const [isTranslating, setIsTranslating] = useState<boolean>(false);

  const handleTranslation = () => {
    setIsTranslating((previous) => !previous);
  };

  return (
    <div className="flex items-center justify-center mt-55 p-2">
      {isTranslating ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <div>
            <button
              className="px-10 border-5 border-white p-5 rounded-full bg-red-500 hover:cursor-pointer hover:scale-105 transition-all"
              onClick={handleTranslation}
              type="button"
            >
              <BiSolidSquareRounded className="text-white" size={32} />
            </button>
          </div>

          <span className="text-black border-1 px-3 py-1 rounded-full bg-white animate-pulse">
            Recording your audio stream
          </span>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4">
          <div>
            <button
              className="px-10 border-5  border-white p-5 rounded-full bg-blue-500 hover:cursor-pointer hover:scale-105 transition-all"
              onClick={handleTranslation}
              type="button"
            >
              <FaMicrophoneLines className="text-white" size={32} />
            </button>
          </div>
          <span className="text-black border-1 px-3 py-1 rounded-full bg-white">
            Click to record your audio
          </span>
        </div>
      )}
    </div>
  );
};

export default Microphone;
