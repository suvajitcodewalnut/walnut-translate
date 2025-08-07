// Modules
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Microphone from "./components/Microphone/Microphone";

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-950">
      <div className="container  mx-auto px-5 py-10">
        <Header />
        <Content />
        <Microphone />
      </div>
    </div>
  );
};

export default App;
