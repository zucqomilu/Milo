import classes from './Faq.module.css';
import { RiArrowDropDownLine } from 'react-icons/ri';

const FaqDropdown = ({ question, awnser }) =>
      <div className={classes.FaqDropdown}>
        <div className={classes.DropdownToggle}>
          <div className={classes.DropdownIcon}>
            <RiArrowDropDownLine size={32} />
          </div>
          <h4>{question}</h4>
        </div>
        <div className={classes.DropdownList}>
          <div className={classes.DropdownListWrap}>
            <p>{awnser}</p>
          </div>
        </div>
      </div>;

export default FaqDropdown;
