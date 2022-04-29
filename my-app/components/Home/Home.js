import classes from './Home.module.css';
import img from '../../public/milo.gif';
import Image from 'next/image';

const Home = () => {
  return (
    <div className={classes.Home}>
      <h1>Explore Milo, our world of NFTs</h1>
      <p>First ever NFT-Collection issued by a registered Swedish company</p>
      <div className={classes.NewsletterContainer}>
        <h6>Join the drop list</h6>
        <div className={classes.NewsletterForm}>
          <form>
            <input type="text" placeholder="Your Email" />
            <input type="submit"  value=">"/>
          </form>
        </div>
        <a className={classes.Button} href="">Join the drop list</a>
      </div>
      <Image src={img} alt="" />
    </div>
  );
};

export default Home;
