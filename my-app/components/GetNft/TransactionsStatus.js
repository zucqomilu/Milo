import PropTypes from 'prop-types';

const TransactionStatus = ({ isLoading, isSuccesfulTransaktion, transactionStatus }) =>
      <span style={isSuccesfulTransaktion ? { color: '#34d399' } : { color: '#D8000C' }}>
        {isLoading ? <></> : isSuccesfulTransaktion
         ? <>Mined, see transaction: <a href={transactionStatus}>{transactionStatus}</a></>
         : transactionStatus}
      </span>;

TransactionStatus.propTypes = {
    isLoading: PropTypes.bool,
    isSuccesfulTransaktion: PropTypes.bool,
    transactionStatus: PropTypes.string,
};

export default TransactionStatus;
