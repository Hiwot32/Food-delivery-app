import React from 'react'
import styles from './footerStyle.module.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <div className={styles.outerSection}>
        <div className={styles.container}>
            <div className={styles.lists}>
                <div className={styles.media}>
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
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>

                </div>
                </div>
                <div className={styles.right}>
                    <h2>Social Connect</h2>
                    <ul>
                        <li><a className={styles.face}href="#"><FacebookRoundedIcon /></a></li>
                        <li><a className={styles.X}href="#"><XIcon /></a></li>
                        <li><a className={styles.inst} href="#"><InstagramIcon /></a></li>
                        <li><a className={styles.u} href="#"><YouTubeIcon /></a></li>
                    </ul>

                </div>
            </div>
            
            <div className={styles.buttom}>
                <hr />
                <p className={styles.btext}>© 2025 Foodie-Frenzy. All rights reserved.<br />
                Designed by Hexagon Digital Services</p>

            </div>
        </div>

      
    </div>
  )
}

export default Footer
