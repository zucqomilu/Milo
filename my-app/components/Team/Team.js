import classes from './Team.module.css';
import leo from '../../public/LeoNFT.png';
import leo1 from '../../public/LeoNFT_1.png';
import leo2 from '../../public/LeoNFT2.png';
import leo3 from '../../public/LeoNFT3.png';
import leo4 from '../../public/LeoNFT4.png';
import TeamCard from './TeamCard';

const Team = () => {
  return (
    <div className={classes.Team}>
      <div className={classes.Container}>
        <h2>Milo Team</h2>
        <div className={classes.ColumnGrid}>
          <TeamCard img={leo}
                    name='Sara'
                    job='creative manager'
                    twitter='@dannicalifornia' />
          <TeamCard img={leo1}
                    name='Rafael'
                    job='product lead'
                    twitter='@jackjackjackie' />
          <TeamCard img={leo2}
                    name='Juan'
                    job='creative designer'
                    twitter='@jackjackjackie' />
          <TeamCard img={leo3}
                    name='Johannes'
                    job='tech lead'
                    twitter='@jackjackjackie' />
          <TeamCard img={leo4}
                    name='Jonathan'
                    job='web3 developer'
                    twitter='@katie_design'
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' />
        </div>
      </div>
    </div>
  );
};

export default Team;
