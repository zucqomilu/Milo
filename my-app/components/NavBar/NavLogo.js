import classes from './NavBar.module.css';
import img from '../../public/Milo.png';
import Image from 'next/image';

const NavLogo = () => {
  return (
    <div className={classes.NavLogo}>
      <a href="#">
        <Image src={img} alt="" width={50} height={50} />
      </a>
    </div>
  );
};

export default NavLogo;
