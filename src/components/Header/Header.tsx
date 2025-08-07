const Header: React.FC = () => {
  return (
    <div className="text-white flex gap-2">
      <img
        alt="logo"
        className="w-12 h-12 md:w-20 md:h-20 lg:w-20 lg:h-20 border-2 rounded-full p-2 transition-all"
        src="/public/__logo.png"
      />
      <h1 className="text-md md:text-3xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-pink-300  to-pink-500">
        WalnutTranslate
      </h1>
    </div>
  );
};

export default Header;
