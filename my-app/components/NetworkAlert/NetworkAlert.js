import css from './NetworkAlert.module.css';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { CgClose } from 'react-icons/cg';

const NetworkAlert = () => {

    const [networkName, setNetworkName] = useState(null);
    const [close, setClose] = useState(false);

    const capitalize = (str) => 
          str.charAt(0).toUpperCase() + str.slice(1);

    const checkRinkebyNetworkConnected = async () => {
        try {
            const { ethereum } = window;
            
            const provider = new ethers.providers.Web3Provider(ethereum);
            const { chainId, name } = await provider.getNetwork();
            if (chainId !== 4) setNetworkName(name === 'homestead' ? 'main' : name);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const { ethereum, location } = window;

        if (ethereum) {
            ethereum.on("chainChanged", () => location.reload());
            ethereum.on("accountsChanged", () => location.reload());
        }
        
        checkRinkebyNetworkConnected();
    }, []);

    return (
      <>
        {networkName && !close ? (
            <div className={css.NetworkAlert}>
              <span>
                You are viewing data from the test network (Rinkeby),
                but your wallet is connected to the {capitalize(networkName)} network.
              </span>
              <a onClick={() => setClose(true)} className={css.Button}>
                <CgClose size={24} />
              </a>
            </div>
          ) : (
            <></>
          )}
      </>);
};

export default NetworkAlert;
