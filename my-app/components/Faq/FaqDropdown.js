import classes from './Faq.module.css';
import { RiArrowDropDownLine } from 'react-icons/ri';

const FaqDropdown = ({ question, awnser }) => {
  return (
      <div className={classes.FaqDropdown}>
        <div className={classes.DropdownToggle}>
          <div className={classes.DropdownIcon}>
            <RiArrowDropDownLine size={32} />
          </div>
          <h4>{question}</h4>
        </div>
        <div className={classes.DropdownList}>
          <p>{awnser}</p>
        </div>
      </div>
  );
};

export default FaqDropdown;
