import css from './Roadmap.module.css';
import leo from '../../public/LeoNFT.png';
import leo1 from '../../public/LeoNFT_1.png';
import leo2 from '../../public/LeoNFT2.png';
import leo3 from '../../public/LeoNFT3.png';
import leo4 from '../../public/LeoNFT4.png';
import RoadmapStepWrap from './RoadmapStepWrap';
import RoadmapProgressBarWrap from './RoadmapProgressBarWrap';

const Roadmap = () => {

    const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.';

    return (
      <div className={css.Roadmap}>
        <div className={css.Container}>
          <h2>Crypto Hands Roadmap</h2>
          <div className={css.RoadmapWrap}>
            <div className={css.RoadmapColumn}>
              <RoadmapStepWrap
                img={leo}
                percent='5%'
                text={text}
                isLeft={true}
                isCompleted={true} />
              <RoadmapStepWrap
                img={leo1}
                percent='50%'
                text={text}
                isLeft={true}
                isCompleted={false} />
              <RoadmapStepWrap
                img={leo2}
                percent='100%'
                text={text}
                isLeft={true}
                isCompleted={false} />
            </div>
            <RoadmapProgressBarWrap />
            <div className={css.RoadmapColumn}>
              <RoadmapStepWrap
                img={leo3}
                percent='25%'
                text={text}
                isLeft={false}
                isCompleted={false} />
              <RoadmapStepWrap
                img={leo4}
                percent='75%'
                text={text}
                isLeft={false}
                isCompleted={false} />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Roadmap;
