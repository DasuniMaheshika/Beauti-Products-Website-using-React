import React from 'react';
import classes from './Card.module.css';
import { AllProducts } from '../../products/AllProducts';

function Card() {
    return (
        <div className={classes.item}>
            {AllProducts.map((card) => (
                <div className={classes.cardComponent}>
                    <div key={card.id}>
                        <img src={card.image} alt={card.title} className={classes.cardImg} />
                        <p className={classes.cardTitle}>{card.title}</p>
                        <p className={classes.price}>{card.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;