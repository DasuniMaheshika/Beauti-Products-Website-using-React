import React from 'react';
import classes from './layout/Card.module.css'
import { AllProducts } from '../products/AllProducts';

const CardLink = () => {

    return (
        <div className={classes.item}>
            {AllProducts.map((card, index) => (
                <div className={classes.cardComponent} key={`${card.id}-${index}`}>
                    {console.log("cardlink rendering")}
                    <div>
                        <img src={card.image} alt={card.title} className={classes.cardImg} />
                        <p className={classes.cardTitle}>{card.title}</p>
                        <p className={classes.price}>{card.price}</p>
                    </div>
                </div>
            )
            )}
        </div>
    );
};

export default CardLink;
