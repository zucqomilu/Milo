import { FaTwitter, FaDiscord, FaTelegram, FaYoutube } from 'react-icons/fa';
import classes from './NavBar.module.css';

const NavSocialMediaLinks = (props) => {
  return (
    <div className={classes.SocialMediaLinks}>
      <ul>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <FaTwitter color='white'/>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <FaDiscord color='white'/>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <FaTelegram color='white'/>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <FaYoutube color='white'/>
        </li>
      </ul>
    </div>
  );
};

export default NavSocialMediaLinks;
