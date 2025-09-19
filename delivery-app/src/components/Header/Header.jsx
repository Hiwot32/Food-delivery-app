import React from 'react'
import style from './Headerstyle.module.css'
import Logo from '../../assets/Images/foodLogo.svg?component';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';

function Header() {
  return (
    <>
        <div className={style.outerDiv}>
            <div className={style.container}>
                <div className={style.left}>
                    <img src={Logo} width={80} />

                    <p>Foodie-Corner</p>
                </div>
                <div className={style.right}>
                    <ul>
                        <li><HomeIcon /><a href="#">Home</a></li>
                        <li><RestaurantMenuIcon  /><a href="#">Menu</a></li>
                        <li><StarBorderIcon /><a href="#">About</a></li>
                        <li><CallOutlinedIcon /><a href="#">Contact</a></li>
                        <li><a href="#"><ShoppingCartOutlinedIcon /></a></li>
                        <li><VpnKeyOutlinedIcon /><a href="#">Login</a></li>
                    </ul>

                </div>
            </div>
        </div>
      
    </>
  )
}

export default Header
