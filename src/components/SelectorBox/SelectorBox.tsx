/** biome-ignore-all assist/source/organizeImports: <What the hell is this ? Why do we need is sorted> */
import { useState } from "react";

// Modules
import { TbArrowNarrowRightDashed } from "react-icons/tb";
import { languages } from "@/data/Languages";

const SelectorBox: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<
    "english" | "bengali" | null
  >(null);

  const [baseLanguage, setBaseLanguage] = useState("En");
  const [targetLanguage, setTargetLanguage] = useState("Be");

  return (
    <div className="flex items-center justify-center gap-4 md:gap-9 lg:gap-10 mt-20 relative">
      {/* Base language Selector */}
      <div className="relative">
        <button
          className="text-white px-9 py-3 md:px-15 md:py-3 lg:px-20 lg:py-4 rounded-full 
            bg-white/10 backdrop-blur-md border border-white/20 shadow-lg
            transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:cursor-pointer"
          onClick={() =>
            setOpenDropdown(openDropdown === "english" ? null : "english")
          }
          type="button"
        >
          {baseLanguage}
        </button>

        {openDropdown === "english" && (
          <div className="dropdownStyle">
            {languages.map((lang) => (
              <button
                className="itemStyle"
                key={lang}
                onClick={() => {
                  setBaseLanguage(lang);
                  setOpenDropdown(null);
                }}
                type="button"
              >
                {lang}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Arrow */}
      <TbArrowNarrowRightDashed className="text-white" size={33} />

      {/* Translated language Selector */}
      <div className="relative">
        <button
          className="text-white px-9 py-3 md:px-15 md:py-3 lg:px-20 lg:py-4 rounded-full 
            bg-white/10 backdrop-blur-md border border-white/20 shadow-lg
            transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:cursor-pointer"
          onClick={() =>
            setOpenDropdown(openDropdown === "bengali" ? null : "bengali")
          }
          type="button"
        >
          {targetLanguage}
        </button>

        {openDropdown === "bengali" && (
          <div className="dropdownStyle">
            {languages.map((lang) => (
              <button
                className="itemStyle"
                key={lang}
                onClick={() => {
                  setTargetLanguage(lang);
                  setOpenDropdown(null);
                }}
                type="button"
              >
                {lang}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectorBox;
