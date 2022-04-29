import classes from './NavBar.module.css';

import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
import NavLogo from './NavLogo';

const NavBar = () => {
  return (
    <div className={classes.NavBar}>
      <NavLogo />
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default NavBar;
