import css from './GetNft.module.css';

const LoadingSpinner = ({ transactionStatus }) => {
  return (
      <div className={css.SpinnerContainer}>
        <div className={css.LoadingSpinner} />
        <span>{transactionStatus}</span>
    </div>
  );
};

export default LoadingSpinner;
