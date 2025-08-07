const Header: React.FC = () => {
  return (
    <div className="text-white flex gap-2">
      <img
        alt="logo"
        className="w-12 h-12 md:w-20 md:h-20 lg:w-20 lg:h-20 bg-white border-2 border-white rounded-full p-1.5 transition-all"
        src="/public/__logo.png"
      />
      <h1 className="text-md md:text-3xl lg:text-3xl text-white">
        WalnutTranslate
      </h1>
    </div>
  );
};

export default Header;
