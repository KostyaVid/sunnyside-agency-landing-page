import Menu from './Menu/Menu';

const Header = () => {
  return (
    <header className="bg-[#3DBEFF] text-white">
      <div className="2xl:container py-6 px-5 mx-auto flex justify-between items-center relative">
        <div className="font-Fraunces text-xl md:text-4xl">sunnyside</div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
