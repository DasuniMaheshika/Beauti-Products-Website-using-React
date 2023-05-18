import { React, useState } from 'react';
import classes from './Card.module.css';
import { AllProducts } from '../../products/AllProducts';
import { useParams } from "react-router-dom";

const Card = () => {
    const { cardId } = useParams();

    const matchingProducts = AllProducts.filter((card) => card.id === parseInt(cardId));

    const [selectedProduct, setSelectedProduct] = useState('');

    const filteredProducts = selectedProduct
    ? matchingProducts.filter((card) => card.id === selectedProduct) : matchingProducts;

    const productNames = Array.from(new Set(AllProducts.map((card) => card.id)));


    return (
        <div className={classes.item}>
            {filteredProducts.map((card) => (
                <div className={classes.cardComponent} key={card.id}>
                    <div>
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