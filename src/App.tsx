// Modules
/** biome-ignore-all assist/source/organizeImports: <What the hell is this ? Why do we need is sorted> */
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Microphone from "./components/Microphone/Microphone";
import { motion } from "motion/react";

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-bl from-slate-900 via-blue-gray-900 to-gray-950">
      <div className="container mx-auto px-5 py-10">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Header />
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        >
          <Content />
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
        >
          <Microphone />
        </motion.div>
      </div>
    </div>
  );
};

export default App;
