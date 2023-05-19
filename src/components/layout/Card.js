import React from 'react';
import classes from './Card.module.css';

const Card = ({ filterFinal }) => {
    console.log(filterFinal);

    return (

        <div className={classes.item}>

            {filterFinal.length > 0 ? (
                filterFinal.map((card, index) => (

                    <div className={classes.cardComponent} key={`${card.id}-${index}`}>
                        {console.log("rendering")}
                        <div>
                            <img src={card.image} alt={card.title} className={classes.cardImg} />
                            <p className={classes.cardTitle}>{card.title}</p>
                            <p className={classes.price}>{card.price}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p></p>
            )}
        </div>
    );
};

export default Card;
