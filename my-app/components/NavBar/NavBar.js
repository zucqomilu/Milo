import css from './NavBar.module.css';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
import NavLogo from './NavLogo';

const NavBar = () =>
    <div className={css.NavBar}>
      <div className={css.Container}>
        <div className={css.NavBarWrapper}>
          <NavLogo />
          <Navigation />
          <MobileNavigation />
        </div>
      </div>
    </div>;

export default NavBar;
