import { FaTwitter } from 'react-icons/fa';
import classes from './Team.module.css';
import Image from 'next/image';

const TeamCard = ({ img, name, job, twitter, text }) => {
  return (
      <div className={classes.Card}>
        <Image className={classes.CardIcon}
               src={img}
               alt=""
               width="154px"
               height="154px" />
        <h3>{name}</h3>
        <div className={classes.Label}>{job}</div>
        <div className={classes.SocialLink}>
          <a href=""><FaTwitter /> {twitter}</a>
        </div>
      </div>
  );
};

export default TeamCard;
