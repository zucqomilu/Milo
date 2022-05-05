import css from './NavBar.module.css';
import Link from 'next/link';
import PropTypes from 'prop-types';

const NavLink = ({ isMobile, closeMobileMenu, href, text }) => {
  return (
    <Link href={href}>
      <a className={css.NavLink}
         onClick={() => isMobile && closeMobileMenu()}>
        {text}
      </a>
    </Link>
  );
};

NavLink.propTypes = {
    isMobile: PropTypes.bool,
    closeMobileMenu: PropTypes.func,
    href: PropTypes.string,
    text: PropTypes.string
};

export default NavLink;
