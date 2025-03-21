import React from 'react'
import './Footer.css'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt='logo'/>
                <p>Join our Social media sites</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt="facebook" />
                    <img src={assets.twitter_icon} alt="twitter" />
                    <img src={assets.linkedin_icon} alt="linkedin" />

                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Terms of use</li>
                    <li>privacy policy</li>
                    <li>FAQ</li>
                    <li>Investors</li>
                </ul>
                

            </div>
            <div className='footer-content-right'>
                <h2>Get In Touch</h2>
                <ul>
                    <li>📞7989927725</li>
                    <li>✉️lalith@gmail.com</li>
                </ul>
                <div className='app-download' id='app-download'>
                    <p>For Better experience Download<br/> Shopee App</p>
                    <div className='app-download-platform'>
                        <img src={assets.play_store} alt='play-store'/>
                        <img src={assets.app_store} alt='app-store'/>
                    </div>
                 </div>
            </div>
            
        </div>

    </div>
  )
}

export default Footer
