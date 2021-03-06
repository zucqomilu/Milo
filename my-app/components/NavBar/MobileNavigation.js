import css from './NavBar.module.css';
import NavLinks from './NavLinks';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

const MobileNavigation = () => {

  const [open, setOpen] = useState(false);

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className={css.MobileNavigation}>
      <FaBars className={css.Hamburger}
              size='30px'
              onClick={() => setOpen(!open)} />
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNavigation;
