import React from 'react';
import './Nav.css';

function Nav() {
    return (
        <nav>
            <div className="container container-flex">
                <a href className="nav-logo">moja firma</a>

                <div className="nav-links">
                    <a href="#about">o nas</a>
                    <a href="#offers">oferta</a>
                    <a href className="contact">kontakt</a>
                </div>

                <div className="hamburger-menu">
                    <label htmlFor="hamburger">
                        <input id="hamburger" className="hamburger" type="checkbox" />
                        <i className="fas fa-bars" style={{ color: "white" }}></i>

                        <div className="hidden">
                            <ul>
                                <li><a href="#about">o nas</a></li>
                                <li><a href="#offers">oferta</a></li>
                                <li><a href className="contact">kontakt</a></li>
                            </ul>
                        </div>
                    </label>
                </div>
            </div>
        </nav>
    );
}

export default Nav;