import css from './Utility.module.css';
import leo4 from '../../public/LeoNFT4.png';
import leo1 from '../../public/LeoNFT_1.png';
import leo from '../../public/LeoNFT.png';
import UtilityCard from './UtilityCard';

const Utility = () => {
  return (
    <div className={css.Utility} id='utility'>
      <div className={css.Container}>
        <h2>Why Milo?</h2>
        <div className={css.ColumnGrid}>
          <UtilityCard img={leo4}
                       header='Buy'
                       text='Buy into the Milo project and be forever rewarded.'/>
          <UtilityCard img={leo1}
                       header='Own'
                       text='By owning the NFT in your wallet you get access to exclusive features and discounts on Swedish Crypto Tax Reporting company Monetax, and will be able to access our metaverse-office any time you like.'/>
          <UtilityCard img={leo}
                       header='Rock'
                       text='Being part of the Milo NFT community, and meeting new friends and bla bla bla'/>
        </div>
      </div>
    </div>
  );
};

export default Utility;
