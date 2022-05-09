import css from './Home.module.css';
import img from '../../public/milo.gif';
import Image from 'next/image';

const Home = () =>
    <div className={css.Home}>
      <div className={css.Container}>
        <div className={css.HomeWrap}>
          <div className={css.HomeContentWrap}>
            <h1>Explore Milo, our world of NFTs</h1>
            <p>First ever NFT-Collection issued by a registered Swedish company</p>
            <div className={css.NewsletterContainer}>
              <h6>Join the drop list</h6>
              <div className={css.NewsletterForm}>
                <form>
                  <input type="text" placeholder="Your Email" />
                  <input type="submit"  value=">"/>
                </form>
              </div>
              <a className={css.Button} href="">Join the drop list</a>
            </div>
          </div>
          <div className={css.HomeImageWrap}>
            <Image className={css.HomeImage} src={img} alt="" />
          </div>
        </div>
      </div>
    </div>;

export default Home;
