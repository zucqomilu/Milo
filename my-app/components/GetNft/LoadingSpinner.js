import css from './GetNft.module.css';
import PropTypes from 'prop-types';

const LoadingSpinner = ({ transactionStatus }) =>
      <div className={css.SpinnerContainer}>
        <div className={css.LoadingSpinner} />
        <span>{transactionStatus}</span>
      </div>;

LoadingSpinner.propTypes = {
    transactionStatus: PropTypes.string,
};

export default LoadingSpinner;
