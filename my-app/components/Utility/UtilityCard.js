import classes from './Utility.module.css';
import Image from 'next/image';

const UtilityCard = ({ img, header, text }) => {
  return (
      <div className={classes.Card}>
        <Image className={classes.CardIcon} src={img} alt="" />
        <h3>{header}</h3>
        <p>{text}</p>
      </div>
  );
};

export default UtilityCard;
