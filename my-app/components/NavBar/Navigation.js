import css from './NavBar.module.css';
import NavLinks from './NavLinks';

const Navigation = () => {
  return (
    <nav className={css.Navigation}>
      <NavLinks />
    </nav>
  );
};

export default Navigation;
