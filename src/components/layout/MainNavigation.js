// import React from "react";
// import { Link } from "react-router-dom";
// import classes from "./MainNavigation.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

// function MainNavigation(props) {

//     return (

//         <header className={classes.header}>
//             <nav className={classes.navigation}>
//                 <ul>
//                     <li>
//                         <Link to="/">HOME</Link>
//                     </li>
//                     <li>
//                         <Link to="/shop-all">ALL</Link>
//                     </li>
//                     <div className={classes.dropdown}>
//                         <li className={classes.dropbtn}> BRANDS
//                             <FontAwesomeIcon icon={faCaretDown} style={{ color: "#535353" }} />
//                         </li>
//                         <div className={classes.dropdownContent}>
//                             <Link to="/brands/luv-esence">LuvEsence</Link>
//                             <Link to="/brands/4rever">4rever</Link>
//                             <Link to="/brands/janet">Janet</Link>
//                             <Link to="/brands/dr-rashel">DR-RASHEL</Link>
//                         </div>
//                     </div>

//                     <div className={classes.dropdown}>
//                         <li className={classes.dropbtn}> OFFERS
//                             <FontAwesomeIcon icon={faCaretDown} style={{ color: "#535353" }} />
//                         </li>
//                         <div className={classes.dropdownContent}>
//                             <Link to="/offers-free-gift">FREE GIFTS</Link>
//                             <Link to="/offers-bundle">BUNDLE OFFERS</Link>
//                         </div>
//                     </div>

//                 </ul>
//             </nav>
//         </header>
//     );
// }

// export default MainNavigation;

//---------------------------------------

// import React from "react";
// import { Link } from "react-router-dom";
// import classes from "./MainNavigation.module.css";
// import "./Card.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
// import { useEffect, useState } from "react";
// import "./Card.module.css";
// import Card from "./Card";
// import { AllProducts } from "../../products/AllProducts";
// import { useParams } from "react-router-dom";

// function MainNavigation() {
//     const { cardId } = useParams();
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         const filteredProducts = AllProducts.filter(
//             (card) => card.id === cardId
//         );
//         setProducts(filteredProducts);
//     }, [cardId]);

//     return (
//         <header className={classes.header}>
//             <nav className={classes.navigation}>
//                 <ul>
//                     <li>
//                         <Link to="/">HOME</Link>
//                     </li>
//                     <li>
//                         <Link to="/shop-all">ALL</Link>
//                     </li>
//                     <div className={classes.dropdown}>
//                         <li className={classes.dropbtn}>
//                             {" "}
//                             BRANDS
//                             <FontAwesomeIcon
//                                 icon={faCaretDown}
//                                 style={{ color: "#535353" }}
//                             />
//                         </li>
//                         <div className={classes.dropdownContent}>
//                             <Link id="1" to="/brands/luv-esence">LuvEsence</Link>
//                             <Link id="2" to="/brands/4rever">4rever</Link>
//                             <Link id="3" to="/brands/janet">Janet</Link>
//                             <Link id="4" to="/brands/dr-rashel">DR-RASHEL</Link>
//                         </div>
//                     </div>
//                     <li>
//                         <Link to="/offers">OFFERS</Link>
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//     );
// }

// export default MainNavigation;

//----------------------
import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { AllProducts } from '../../products/AllProducts';
//import Card from './Card';

function MainNavigation() {
    const { productId } = useParams();

    // Get unique ids from AllProducts array
    const uniqueIds = [...new Set(AllProducts.map(product => product.name))];
    const [selectedProduct, setSelectedProduct] = useState("");

    const matchingProducts = AllProducts.filter(
        (product) => product.id === parseInt(productId)
    );

    const filteredProducts = selectedProduct
        ? matchingProducts.filter((product) => product.id === selectedProduct)
        : matchingProducts;

    return (
        <header className={classes.header}>
            <nav className={classes.navigation}>
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/shop-all">ALL</Link>
                    </li>
                    <div className={classes.dropdown}>
                        <li className={classes.dropbtn}> BRANDS
                            <FontAwesomeIcon icon={faCaretDown} style={{ color: "#535353" }} />
                        </li>
                        <div className={classes.dropdownContent} value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
                            {uniqueIds.map(name => (
                                <Link key={name} to={`/brands/${name}`}>
                                    {`${name}`}
                                </Link>
                            ))}
                            
                        </div>
                    </div>
                    {filteredProducts.map((card) => (
                                    <div className={classes.cardComponent} key={card.id}>
                                        <div>
                                            <img src={card.image} alt={card.title} className={classes.cardImg} />
                                            <p className={classes.cardTitle}>{card.title}</p>
                                            <p className={classes.price}>{card.price}</p>
                                        </div>
                                    </div>
                                ))
                            }

                    <div className={classes.dropdown}>
                        <li className={classes.dropbtn}> OFFERS
                            <FontAwesomeIcon icon={faCaretDown} style={{ color: "#535353" }} />
                        </li>
                        <div className={classes.dropdownContent}>
                            <Link to="/offers-free-gift">FREE GIFTS</Link>
                            <Link to="/offers-bundle">BUNDLE OFFERS</Link>
                        </div>
                    </div>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;

