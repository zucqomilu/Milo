import css from './GetNft.module.css';

const GetNft = () => {
    return (
        <div className={css.GetNft}>
          <div className={css.Container}>
            <div className={css.TwoColumnGrid}>
              <h2>Join the Milo club!</h2>
              <a className={css.Button} href="">Get Your Crypto Hand</a>
            </div>
          </div>
        </div>
    );
};

export default GetNft;
