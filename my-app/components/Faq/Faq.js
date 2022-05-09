import css from './Faq.module.css';
import FaqDropdown from './FaqDropdown';

const Faq = () => {

    const loremShort = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.';

    const loremLong = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.';

    return (
      <div className={css.Faq} id='faq'>
        <div className={css.Container}>
          <div className={css.TwoColumnGrid}>
            <div className={css.Node + ' ' + css.ContentBox}>
              <h2>Frequently asked questions</h2>
              <p>{loremShort}</p>
            </div>
            <div className={css.Node}>
              <FaqDropdown
                question='How can I get Whitelisted?'
                awnser={loremLong} />
              <FaqDropdown
                question='When is the launch?'
                awnser={loremLong} />
              <FaqDropdown
                question='Are Milo a good inverstment?'
                awnser={loremLong} />
              <FaqDropdown
                question='Where can I get a Milo?'
                awnser={loremLong} />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Faq;
