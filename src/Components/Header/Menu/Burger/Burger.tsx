interface IBurgerProps {
  onClick: () => void;
  activeMenu: boolean;
}

const Burger = ({ onClick, activeMenu }: IBurgerProps) => {
  return (
    <button className="w-8 h-6 relative block sm:hidden" onClick={onClick}>
      <div className="w-8 h-6 space-y-2 sm:hidden">
        <div className={`w-8 h-0.5 bg-white${activeMenu ? ' scale-0' : ''} transition-all`}></div>
        <div className={`w-8 h-0.5 bg-white ${activeMenu ? 'scale-0' : ''} transition-all`}></div>
        <div className={`w-8 h-0.5 bg-white${activeMenu ? ' scale-0' : ''} transition-all`}></div>
      </div>
      <svg
        className={`h-8 w-8 scale-0 top-0 -translate-y-1/4 ${
          activeMenu ? 'scale-100' : ''
        } transition-all absolute`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 22"
        stroke="currentColor"
        aria-hidden="true">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

export default Burger;
