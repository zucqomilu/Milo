import css from './Roadmap.module.css';
import Image from 'next/image';
import PropTypes from 'prop-types';

const RoadmapStepWrap = ({ img, percent, text, isLeft, isCompleted }) =>
      <div className={`${css.RoadmapStepWrap} ${isLeft ? css.Left : ''}`}>
        <div className={`${css.ImageWrapper} ${isLeft ? css.Left : css.Right}`}>
          <Image className={css.RoadmapImage} src={img} alt='' />
        </div>
        <div className={css.RoadmapContentWrap}>
          <div className={`${css.RoadmapStepHeadingWrap} ${isLeft ? css.Left : ''}`}>
            <h3>{percent} Sales</h3>
            <div className={`${css.AnnounceLabel} ${isCompleted ? css.Completed : ''}`}>
              {isCompleted ? 'completed' : 'coming soon'}
            </div>
          </div>
          <p>{text}</p>
        </div>
      </div>;

RoadmapStepWrap.propTypes = {
    img: PropTypes.any,
    percent: PropTypes.string,
    text: PropTypes.string,
    isCompleted: PropTypes.bool,
    isLeft: PropTypes.bool
};

export default RoadmapStepWrap;
