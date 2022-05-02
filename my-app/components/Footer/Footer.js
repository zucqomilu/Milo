import css from './Footer.module.css';
import { FaTwitter, FaDiscord, FaTelegram, FaYoutube } from 'react-icons/fa';
import { CgPlayButton } from 'react-icons/cg';

const Footer = () => {
  return (
      <div className={css.Footer}>
        <div className={css.Container}>
          <div className={css.FooterWrap}>
            <div className={css.FooterLinksWrap}>
              <div className={css.FooterColumn}>
                <h6>Webflow Admin</h6>
                <a className={css.FooterLink} href="">Licencing</a>
                <a className={css.FooterLink} href="">StyleGuide</a>
                <a className={css.FooterLink} href="">Changelog</a>
                <a className={css.FooterLink} href="">404 Page</a>
              </div>
              <div className={css.FooterColumn}>
                <h6>Governance</h6>
                <a className={css.FooterLink} href="">Utility</a>
                <a className={css.FooterLink} href="">About</a>
                <a className={css.FooterLink} href="">Team</a>
                <a className={css.FooterLink} href="">FAQ</a>
              </div>
              <div className={css.FooterColumn + ' ' + css.Node}>
                <h6>Community</h6>
                <div className={css.SocialLinksWrap}>
                  <a className={css.SocialLink}
                     href=""><FaTwitter size={20} /></a>
                  <a className={css.SocialLink}
                     href=""><FaDiscord size={20} /></a>
                  <a className={css.SocialLink}
                     href=""><FaTelegram size={20} /></a>
                  <a className={css.SocialLink}
                     href=""><FaYoutube size={20} /></a>
                </div>
              </div>
            </div>
            <div className={css.NewsletterWrap}>
              <div className={css.FooterColumn}>
                <h6>Get on the Newsletter</h6>
                <div className={css.NewsletterForm}>
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
