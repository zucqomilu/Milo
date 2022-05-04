import css from './About.module.css';
import nyalog from '../../public/nyalog.png';
import Image from 'next/image';

const About = () => {
    return (
      <div className={css.About}>
        <div className={css.Container}>
          <div className={css.BlackBox}>
            <div className={css.BlackBoxContainer}>
              <div className={css.ImageContainer}>
                <Image src={nyalog} alt="" />
              </div>
              <div className={css.BlackBoxContent}>
                <h3>Nat om Monetax</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
              </div>     
            </div>   
          </div>
        </div>
      </div>
    );
};

export default About;
