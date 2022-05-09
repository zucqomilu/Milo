import classes from './Utility.module.css';
import Image from 'next/image';

const UtilityCard = ({ img, header, text }) =>
      <div className={classes.Card}>
        <Image className={classes.CardIcon}
               width={300}
               height={300}
               src={img}
               alt="" />
        <h3>{header}</h3>
        <p>{text}</p>
      </div>;

export default UtilityCard;
