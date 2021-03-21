import React from 'react';
import './Offers.css';
import OfferBox from './OfferBox';

const offersList = [
    {
        id:1,
        offerName: "Usługa 1",
        isNew: false,
    },
    {  
        id:2,
        offerName: "Usługa 2",
        isNew: true,
    },
    {   
        id:3,
        offerName: "Usługa 3",
        isNew: false,
    },
    {   
        id:4,
        offerName: "Usługa 4",
        isNew: true,
    },
    {   
        id:5,
        offerName: "Usługa 5",
        isNew: false,
    },
    {
        id:6,
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
                        return <OfferBox title={offer.offerName} isNew={offer.isNew} key={offer.id}/>
                    })}
                </div>
            </div>
        </section>
    );
}

export default Offers;