import css from './NavBar.module.css';
import Link from 'next/link';
import NavSocialMediaLinks from './NavSocialMediaLinks.js';

const NavLinks = (props) => {
    return (
      <div className={css.NavLinks}>
        <Link href="/#utility">
          <a className={css.NavLink}
             onClick={() => props.isMobile && props.closeMobileMenu()}>
            Utility
          </a>
        </Link>
        <Link href="/#about">
          <a className={css.NavLink}
             onClick={() => props.isMobile && props.closeMobileMenu()}>
            About
          </a>
        </Link>
        <Link href="/#team">
          <a className={css.NavLink}
             onClick={() => props.isMobile && props.closeMobileMenu()}>
            Team
          </a>
        </Link>
        <Link href="/#faq">
          <a className={css.NavLink}
             onClick={() => props.isMobile && props.closeMobileMenu()}>
            FAQ
          </a>
        </Link>
        <NavSocialMediaLinks />
      </div>        
    );
};

export default NavLinks;
