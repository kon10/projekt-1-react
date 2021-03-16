import React from 'react';
import './LandingPage.css';

function LandingPage() {
    return (
        <section className="landing-page">
            <div className="landing-page-shadow">
                <div className="container container-text">
                    <h1>Nasza firma oferuje najwyższej jakości produkty.</h1>
                    <h2>Nie wierz nam na słowo - sprawdź</h2>
                    <a href="#offers" className="offerBtn">oferta</a>
                </div>
            </div>
        </section>
    );
}

export default LandingPage;