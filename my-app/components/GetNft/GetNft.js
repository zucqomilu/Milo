import css from './GetNft.module.css';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { NFT_CONTRACT_ABI, NFT_CONTRACT_ADDRESS } from '../../constants';
import LoadingSpinner from './LoadingSpinner';
import TransactionStatus from './TransactionsStatus';

const GetNft = () => {

    const [currentAccount, setCurrentAccount] = useState(null);
    const [isNetworkRinkeby, setIsNetworkRinkeby] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [transactionStatus, setTransactionStatus] = useState(null);
    const [isSuccesfulTransaktion, setIsSuccesfulTransaktion] = useState(false);

    const checkWalletIsConnected = async () => {
        const { ethereum } = window;

        if (ethereum) console.log("Wallet exists! We're ready to go!");
        else return;

        const accounts = await ethereum.request({ method: 'eth_accounts' });

        if (accounts.length !== 0) setCurrentAccount(accounts[0]);
        else console.log("No authorized account found");
    };

    const checkRinkebyNetworkConnected = async () => {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const { chainId } = await provider.getNetwork();
            if (chainId === 4) setIsNetworkRinkeby(true);
        } catch (err) {
            console.log(err);
        }
    };

    const connectWalletHandler = async () => {
        const { ethereum } = window;

        if (!ethereum) alert("Please install Metamask!");

        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            setCurrentAccount(accounts[0]);
        } catch (err) {
            console.log(err);
        }
    };

    const mintNftHandler = async () => {
        try {
            const { ethereum } = window;

            if (ethereum) {
                setIsLoading(true);
                
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const nftContract = new ethers.Contract(NFT_CONTRACT_ADDRESS, NFT_CONTRACT_ABI, signer);
                
                setTransactionStatus("Initialize payment");
                const nftTxn = await nftContract.mintNFTs(1, { value: ethers.utils.parseEther('0.01'), gasLimit: 500000 });

                setTransactionStatus("Mining... please wait");
                await nftTxn.wait();
                
                setIsLoading(false);
                setTransactionStatus(`https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);
                setIsSuccesfulTransaktion(true);
            } else console.log("Ethereum object does not exist");
        } catch (err) {
            setIsLoading(false);
            setTransactionStatus("Transaction failed");
            setIsSuccesfulTransaktion(false);
            console.log(err);
        }
    };

    const Button = () => 
          <button onClick={currentAccount ? mintNftHandler : connectWalletHandler}
                  className={css.Button}>
            {currentAccount ? 'Mint a Crypto Cat' : 'Connect Wallet'}
          </button>;

    useEffect(() => {
        checkWalletIsConnected();
        checkRinkebyNetworkConnected();
    }, []);

    return (
        <div className={css.GetNft}>
          <div className={css.Container}>
            <div className={css.TwoColumnGrid}>
              <h2>Join the Milo club!</h2>
              {isLoading
               ? <LoadingSpinner transactionStatus={transactionStatus} />
               : isNetworkRinkeby || !currentAccount ? Button() : <></>}
              <TransactionStatus isLoading={isLoading}
                                 isSuccesfulTransaktion={isSuccesfulTransaktion}
                                 transactionStatus={transactionStatus} />
            </div>
          </div>
        </div>
    );
};

export default GetNft;
