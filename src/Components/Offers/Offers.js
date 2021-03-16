import React from 'react';
import './Offers.css';
import OfferBox from './OfferBox';

const offersList = [
    {
        offerName: "Usługa 1",
        isNew: false,
    },
    {
        offerName: "Usługa 2",
        isNew: true,
    },
    {
        offerName: "Usługa 3",
        isNew: false,
    },
    {
        offerName: "Usługa 4",
        isNew: true,
    },
    {
        offerName: "Usługa 5",
        isNew: false,
    },
    {
        offerName: "Usługa 6",
        isNew: true,
    },
]

function Offers() {
    return (
        <section className="offers" id="offers">
            <div className="container">
                <h1>Czym zajmuje się nasza firma?</h1>

                <div className="offers-wrapper">
                    {offersList.map(offer => {
                        return <OfferBox title={offer.offerName} isNew={offer.isNew} />
                    })}
                </div>
            </div>
        </section>
    );
}

export default Offers;