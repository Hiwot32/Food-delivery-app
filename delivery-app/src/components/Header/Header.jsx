import React, {useState} from 'react'
import style from './Headerstyle.module.css'
import Logo from '../../assets/Images/2ndLogo.png';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import ListIcon from '@mui/icons-material/List';

function Header() {

    const [isOpen, setIsOpen]=useState(false);

    const toggleMenu=()=>{
        setIsOpen(!isOpen);
    }
  return (
    <>
        <div className={style.outerDiv}>
            <div className={style.container}>
                <div className={style.left}>
                    <img src={Logo} width={90} />

                    <p className={style.text}>Foodie-Corner</p>
                </div>

                <div  className={style.menuIcon} onClick={toggleMenu}>
                     <ListIcon/>
                </div>

                <div className={`${style.right} ${isOpen ? style.showMenu : ''}`}>
                    <ul>
                        <li><HomeIcon /><a href="#">Home</a></li>
                        <li><RestaurantMenuIcon  /><a href="#">Menu</a></li>
                        <li><StarBorderIcon /><a href="#">About</a></li>
                        <li><CallOutlinedIcon /><a href="#">Contact</a></li>
                        <li><a href="#"  className={style.cart}><ShoppingCartOutlinedIcon /></a></li>
                        <li><VpnKeyOutlinedIcon /><a href="#">Login</a></li>
                    </ul>

                </div>
            </div>
        </div>
      
    </>
  )
}

export default Header
