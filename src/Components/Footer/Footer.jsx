import React from 'react'
import './footer.css'
import footer from '../../assets/img/footer.png'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="footer-wrapper">
                <div className="footer-box">
                    <div className="logo">
                        <div className="logo-img">
                            <img src={footer} alt="" />
                        </div>
                        <h2>TechFlix AI</h2>
                    </div>
                    <p>Embrance the future of innovation and technology with our cutting-edge business solutions</p>

                </div>
                <div className="footer-box">
                    <h4 className='footer-title'>Company</h4>
                    <ul className='footer-links'>
                    <li> <a href="">Our Programs</a></li>
                    <li><a href="">Our plan</a></li>
                    <li><a href="">Become a member</a></li>
                    </ul>
                </div>
                <div className="footer-box">
                <h4 className='footer-title'> Quick Links</h4>
                <ul className='footer-links'>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Support</a></li>
                </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
