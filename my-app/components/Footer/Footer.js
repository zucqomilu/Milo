import classes from './Footer.module.css';
import { FaTwitter, FaDiscord, FaTelegram, FaYoutube } from 'react-icons/fa';
import { CgPlayButton } from 'react-icons/cg';

const Footer = () => {
  return (
      <div className={classes.Footer}>
        <div className={classes.Container}>
          <div className={classes.FooterWrap}>
            <div className={classes.FooterLinksWrap}>
              <div className={classes.FooterColumn}>
                <h6>Webflow Admin</h6>
                <a href="">Licencing</a>
                <a href="">StyleGuide</a>
                <a href="">Changelog</a>
                <a href="">404 Page</a>
              </div>
              <div className={classes.FooterColumn}>
                <h6>Governance</h6>
                <a href="">Utility</a>
                <a href="">About</a>
                <a href="">Team</a>
                <a href="">FAQ</a>
              </div>
              <div className={classes.FooterColumn + ' ' + classes.Node}>
                <h6>Community</h6>
                <div className={classes.SocialLinksWrap}>
                  <a href=""><FaTwitter size={20} /></a>
                  <a href=""><FaDiscord size={20} /></a>
                  <a href=""><FaTelegram size={20} /></a>
                  <a href=""><FaYoutube size={20} /></a>
                </div>
              </div>
            </div>
            <div className={classes.NewsletterWrap}>
              <div className={classes.FooterColumn}>
                <h6>Get on the Newsletter</h6>
                <div className={classes.NewsletterForm}>
                  <form>
                    <input type="text" placeholder="Your Email" />
                    <input type="submit"  value=">"/>
                  </form>
                </div>
              </div>
              <div>
                <strong>&copy; </strong>
                2022 All rights are reserved
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Footer;
