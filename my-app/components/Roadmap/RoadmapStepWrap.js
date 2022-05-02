import css from './Roadmap.module.css';
import Image from 'next/image';

const RoadmapStepWrap = ({ img, percent, text, isCompleted }) => {
    
    const completed = <div className={css.AnnounceLabel + ' ' + css.Completed}>
                       completed
                     </div>;

    const comingSoon = <div className={css.AnnounceLabel}>
                         coming soon
                       </div>;

    return (
        <div className={css.RadmapStepWrap}>
          <Image className={css.RoadmapImage}
                 height={158}
                 width={158}
                 src={img}
                 alt='' />
          <div className={css.RoadmapContentWrap}>
            <div className={css.RoadmapStepHeadingWrap}>
              <h3>{percent} Sales</h3>
              {isCompleted === 'true' ? completed : comingSoon}
            </div>
            <p>{text}</p>
          </div>
        </div>
    );
};

export default RoadmapStepWrap;
