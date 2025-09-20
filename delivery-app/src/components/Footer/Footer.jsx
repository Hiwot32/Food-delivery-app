import React from 'react'
import styles from './footerStyle.module.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Footer() {
  return (
    <div className={styles.outerSection}>
        <div className={styles.container}>
            <div className={styles.lists}>
                <div className={styles.left}>
                    <h1>Foodie-Corner</h1>
                    <p className={styles.des}>Where culinary artistry meets doorstep convenience.
                        Savor handcrafted perfection, delivered with care.</p>

                    <p className={styles.email}><MailOutlineIcon />Get Exclusive Offers</p>
                    <input type="text" placeholder='Enter your email...'></input>

                </div>
                <div className={styles.middle}>
                    <h2>Navigation</h2>
                    <ul>
                        <li>Home</li>
                        <li>Menu</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>

                </div>
                <div className={styles.right}>
                    <h2>Social Connect</h2>
                    <ul>
                        <li>facebook</li>
                        <li>instagram</li>
                        <li>X</li>
                        <li>youtube</li>
                    </ul>

                </div>
            </div>
            
            <div className={styles.buttom}>
                <hr />
                <p>© 2025 Foodie-Frenzy. All rights reserved.</p>
                <p>Designed by Hexagon Digital Services</p>

            </div>
        </div>

      
    </div>
  )
}

export default Footer
