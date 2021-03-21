import React from 'react';

function OfferBox({ title, isNew, key }) {
    return (
        <div className={`offers-wrapper-box`}>
            <div className={`${isNew ? 'offers-dott' : ''}`}></div>
            <div className="offers-wrapper-box-content">
                <h2>{title}</h2>
                {isNew && <span>(nowość)</span>}
            </div>
        </div>
    );
}

export default OfferBox;