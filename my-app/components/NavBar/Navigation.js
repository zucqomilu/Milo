import classes from './NavBar.module.css';
import NavLinks from './NavLinks';
import NavSocialMediaLinks from './NavSocialMediaLinks';

const Navigation = () => {
  return (
    <nav className={classes.Navigation}>
      <NavLinks />
      <NavSocialMediaLinks />
    </nav>
  );
};

export default Navigation;
