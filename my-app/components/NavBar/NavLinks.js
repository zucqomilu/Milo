import css from './NavBar.module.css';
import NavSocialMediaLinks from './NavSocialMediaLinks.js';
import PropTypes from 'prop-types';
import NavLink from './NavLink';

const NavLinks = ({ isMobile, closeMobileMenu }) => {
    return (
      <div className={css.NavLinks}>
        <NavLink isMobile={isMobile}
                 closeMobileMenu={closeMobileMenu}
                 href='/#utility'
                 text='Utility' />
        <NavLink isMobile={isMobile}
                 closeMobileMenu={closeMobileMenu}
                 href='/#about'
                 text='About' />
        <NavLink isMobile={isMobile}
                 closeMobileMenu={closeMobileMenu}
                 href='/#team'
                 text='Team' />
        <NavLink isMobile={isMobile}
                 closeMobileMenu={closeMobileMenu}
                 href='/#faq'
                 text='FAQ' />
        {isMobile || <NavSocialMediaLinks />}
      </div>        
    );
};

NavLinks.propTypes = {
    isMobile: PropTypes.bool,
    closeMobileMenu: PropTypes.func
};

export default NavLinks;
