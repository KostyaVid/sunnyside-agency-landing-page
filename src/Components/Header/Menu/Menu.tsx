import { useEffect, useState } from 'react';
import Burger from './Burger/Burger';
import s from './Menu.module.css';

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  useEffect(() => {
    function resize() {
      if (document.body.clientWidth >= 640) {
        setActiveMenu(false);
      }
    }

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);
  return (
    <>
      <nav className={[activeMenu ? s.activeNav : 'hidden', s.nav].join(' ')}>
        <div
          className={`triangle absolute -top-5 right-0 ${activeMenu ? 'block' : 'hidden'}`}></div>
        <ul className={s.ul}>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <button className={s.button}>CONTACT</button>
          </li>
        </ul>
      </nav>
      <Burger
        activeMenu={activeMenu}
        onClick={() => {
          setActiveMenu(!activeMenu);
        }}
      />
    </>
  );
};

export default Menu;
