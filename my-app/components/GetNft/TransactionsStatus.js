const TransactionStatus = ({ isLoading, isSuccesfulTransaktion, transactionStatus }) =>
      <span style={isSuccesfulTransaktion ? { color: '#34d399' } : { color: '#D8000C' }}>
        {isLoading ? <></> : isSuccesfulTransaktion
         ? <>Mined, see transaction: <a href={transactionStatus}>{transactionStatus}</a></>
         : transactionStatus}
      </span>;

export default TransactionStatus;
