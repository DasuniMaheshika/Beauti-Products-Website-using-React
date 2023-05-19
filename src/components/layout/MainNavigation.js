import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { AllProducts } from '../../products/AllProducts';
import Card from './Card';
import ShopAllPage from '../../pages/ShopAllPage';
import { useEffect } from 'react';

function MainNavigation() {


    const uniqueIds = [...new Set(AllProducts.map((product) => product.name))];
    const [selectedProduct, setSelectedProduct] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    //   useEffect(()=>{

    //      setFilteredProducts(AllProducts)
    //   },[])

    const handleProductChange = (e) => {
        setSelectedProduct(e.target.value);

        const filteredProducts = AllProducts.filter((product) =>
            product.name.toLowerCase().includes(e.target.value.toLowerCase()))
        console.log("writing", filteredProducts);
        setFilteredProducts(filteredProducts);
    };

    return (
        <header className={classes.header}>
            <nav className={classes.navigation}>
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    {/* <li>
                        <Link to="/shop-all">ALL</Link>
                    </li> */}
                    <div className={classes.dropdown}>
                        <li className={classes.dropbtn}>
                            BRANDS
                            <FontAwesomeIcon icon={faCaretDown} style={{ color: '#535353' }} />
                        </li>
                        <div className={classes.dropdownContent}>

                            {/* {uniqueIds.map((name) => (
                                <Link key={name} to={`/brands/${name}`}>
                                    {`${name}`}
                                </Link>

                            ))} */}
                            <select
                                value={selectedProduct}
                                onChange={handleProductChange}
                                className={classes.dropdownContent}
                            >
                                <option value="">All</option>
                                {uniqueIds.map((name) => (
                                    <option key={name} value={name} >
                                        
                                        <Link to={`/brands/${name}`}>{name}</Link>
                                    </option>

                                ))}
                            </select>
                        </div>
                    </div>

                    <div className={classes.dropdown}>
                        <li className={classes.dropbtn}>
                            OFFERS
                            <FontAwesomeIcon icon={faCaretDown} style={{ color: '#535353' }} />
                        </li>
                        <div className={classes.dropdownContent}>
                            <Link to="/offers-free-gift">FREE GIFTS</Link>
                            <Link to="/offers-bundle">BUNDLE OFFERS</Link>
                        </div>
                    </div>
                </ul>
            </nav>
            <Card filterFinal={filteredProducts} />
            {/* <ShopAllPage filterFinal={filteredProducts} /> */}
        </header>
    );
}

export default MainNavigation;
