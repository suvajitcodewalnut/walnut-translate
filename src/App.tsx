// Modules
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Microphone from "./components/Microphone/Microphone";

const App: React.FC = () => {
  return (
    <div
      className="w-full min-h-screen bg-gradient-to-bl from-slate-900 via-blue-gray-900 to-gray-950
"
    >
      <div className="container mx-auto px-5 py-10">
        <Header />
        <Content />
        <Microphone />
      </div>
    </div>
  );
};

export default App;
