import React from 'react'
import style from './Headerstyle.module.css'
import logo from '../../assets/Images/foodLogo.svg'

function Header() {
  return (
    <>
        <div className={style.outerDiv}>
            <div className={style.container}>
                <div className={style.left}>
                    <img src={logo} width={100}/>
                    <p>Foodie-Corner</p>
                </div>
                <div className={style.right}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">cart</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>

                </div>
            </div>
        </div>
      
    </>
  )
}

export default Header
