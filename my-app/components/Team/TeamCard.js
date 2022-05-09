import css from './Team.module.css';
import { FaTwitter } from 'react-icons/fa';
import Image from 'next/image';
import PropTypes from 'prop-types';

const TeamCard = ({ img, name, job, twitter, text }) =>
      <div className={css.Card}>
        <Image className={css.CardIcon}
               src={img}
               alt=""
               width="154px"
               height="154px" />
        <h3>{name}</h3>
        <div className={css.Label}>{job}</div>
        <div className={css.SocialLink}>
          <a href=""><FaTwitter size={18} /> {twitter}</a>
        </div>
      </div>;

TeamCard.propTypes = {
    img: PropTypes.any,
    name: PropTypes.string,
    job: PropTypes.string,
    twitter: PropTypes.string,
    text: PropTypes.string
};

export default TeamCard;
