import { FaTwitter, FaDiscord, FaTelegram, FaYoutube } from 'react-icons/fa';
import { IconContext } from "react-icons";
import css from './NavBar.module.css';

const NavSocialMediaLinks = (props) => {
  return (
    <div className={css.SocialMediaLinks}>    
      <a onClick={() => props.isMobile && props.closeMobileMenu()}>
        <FaTwitter />
      </a>
      <a onClick={() => props.isMobile && props.closeMobileMenu()}>
        <FaDiscord />
      </a>
      <a onClick={() => props.isMobile && props.closeMobileMenu()}>
        <FaTelegram />
      </a>
      <a onClick={() => props.isMobile && props.closeMobileMenu()}>
        <FaYoutube />
      </a>
    </div>
  );
};

export default NavSocialMediaLinks;
