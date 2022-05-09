import css from './Roadmap.module.css';

const RoadmapProgressBarWrap = () =>
      <div className={css.RoadmapProgressBarWrap}>
        <div className={css.Circle} />
        <div className={css.ProgressBar} />
        <div className={css.Circle} />
      </div>;

export default RoadmapProgressBarWrap;
