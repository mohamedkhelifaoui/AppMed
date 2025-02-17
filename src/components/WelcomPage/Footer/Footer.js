import React from 'react';
import './Footer.css';
import pic1 from '../../../Assets/cancer 1 (1).png'
import fb from '../../../Assets/Facebook.png'
import insta from '../../../Assets/Instagram.png'
import tw from '../../../Assets/Twitter.png'
import lkd from '../../../Assets/LinkedIn.png'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <a href="#" className="footer-logo">
                        <img src={pic1} alt="DeepMRI Logo" />
                        DeepMRI
                    </a>
                </div>
                <div className="footer-center">
                    <a href="#" className="footer-link">Accueil</a>
                    <a href="#" className="footer-link">À Propos</a>
                </div>
                <div className="footer-right">
                    <a href="#" className="footer-icon"><i className="fab fa-facebook-f"><img src={fb} alt='#'/></i></a>
                    <a href="#" className="footer-icon"><i className="fab fa-twitter"><img src={tw} alt='#'/></i></a>
                    <a href="#" className="footer-icon"><i className="fab fa-instagram"><img src={insta} alt='#'/></i></a>
                    <a href="#" className="footer-icon"><i className="fab fa-linkedin-in"><img src={lkd} alt='#'/></i></a>
                </div>
            </div>
            <div className='borderb'></div>
            <div className="footer-bottom">
                <p>Copyright © 2024 DeepMRI | Tous droits réservés</p>
            </div>
        </footer>
    );
}

export default Footer;
