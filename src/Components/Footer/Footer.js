import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="container container-footer">
                <span>Nazwa firmy - wszelkie prawa zastrzeżone, 2019</span>
                <div className="footer-icon">
                    <a href="https://www.instagram.com/?hl=pl" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram" style={{ color: "white" }}></i>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-square" style={{ color: "white" }}></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;