import css from './NavBar.module.css';
import { FaTwitter, FaDiscord, FaTelegram, FaYoutube } from 'react-icons/fa';
import { IconContext } from "react-icons";
import PropTypes from 'prop-types';

const NavSocialMediaLinks = ({ isMobile, closeMobileMenu }) => {
  return (
    <div className={css.SocialMediaLinks}>    
      <a onClick={() => isMobile && closeMobileMenu()}>
        <FaTwitter size={20} />
      </a>
      <a onClick={() => isMobile && closeMobileMenu()}>
        <FaDiscord size={20} />
      </a>
      <a onClick={() => isMobile && closeMobileMenu()}>
        <FaTelegram size={20} />
      </a>
      <a onClick={() => isMobile && closeMobileMenu()}>
        <FaYoutube size={20} />
      </a>
    </div>
  );
};

NavSocialMediaLinks.propTypes = {
    isMobile: PropTypes.bool,
    closeMobileMenu: PropTypes.func
};

export default NavSocialMediaLinks;
