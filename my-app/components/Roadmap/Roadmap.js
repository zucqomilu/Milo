import css from './Roadmap.module.css';
import leo from '../../public/LeoNFT.png';
import leo1 from '../../public/LeoNFT_1.png';
import leo2 from '../../public/LeoNFT2.png';
import leo3 from '../../public/LeoNFT3.png';
import leo4 from '../../public/LeoNFT4.png';
import RoadmapStepWrap from './RoadmapStepWrap';

const Roadmap = () => {
    return (
        <div className={css.Roadmap}>
          <div className={css.Container}>
            <h2>Crypto Hands Roadmap</h2>
            <div className={css.RoadmapWrap}>
              <div className={css.RoadmapLeftColumn}>
                <RoadmapStepWrap
                  img={leo}
                  percent='5%'
                  text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
                  isCompleted='true' />
                <RoadmapStepWrap
                  img={leo1}
                  percent='50%'
                  text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
                  isCompleted='false' />
                <RoadmapStepWrap
                  img={leo2}
                  percent='100%'
                  text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
                  isCompleted='false' />
              </div>
              <div className={css.RoadmapProgressBarWrap}>
                <div className={css.Circle} />
                <div className={css.ProgressBar} />
                <div className={css.Circle} />
              </div>
              <div className={css.RoadmapRightColumn}>
                <RoadmapStepWrap
                  img={leo3}
                  percent='25%'
                  text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
                  isCompleted='false' />
                <RoadmapStepWrap
                  img={leo4}
                  percent='75%'
                  text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.'
                  isCompleted='false' />
              </div>
            </div>
          </div>
        </div>
    );
};

export default Roadmap;
