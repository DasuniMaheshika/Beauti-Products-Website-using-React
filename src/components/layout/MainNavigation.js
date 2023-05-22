import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { AllProducts } from "../../products/AllProducts";
import Card from "./Card";

function MainNavigation() {
  const uniqueIds = [...new Set(AllProducts.map((product) => product.name))];
  const [selectedProduct, setSelectedProduct] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleProductChange = (e) => {
    const selectedValue = e.target.value.toLowerCase();
    setSelectedProduct(selectedValue);
    navigate(`/brands/${selectedValue}`);
    const filteredProducts = AllProducts.filter((product) =>
      product.name.toLowerCase().includes(selectedValue)
    );
    setFilteredProducts(filteredProducts);
  };

  const navigate = useNavigate();

  return (
    <header className={classes.header}>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/brands/all">All</Link>
          </li>

          <div className={classes.dropdown}>
            <li className={classes.dropbtn}>
              OFFERS
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{ color: "#535353" }}
              />
            </li>
            <div className={classes.dropdownContent}>
              <Link to="/offers-free-gift">FREE GIFTS</Link>
              <Link to="/offers-bundle">BUNDLE OFFERS</Link>
            </div>
          </div>

          <div className={classes.dropdown}>
            <li className={classes.dropbtn}>
              BRANDS
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{ color: "#535353" }}
              />
            </li>
            <div className={classes.dropdownContent}>
              <select
                value={selectedProduct}
                onChange={handleProductChange}
                className={classes.dropdownContent}
              >
              
                {uniqueIds.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </ul>
      </nav>
      <Card filterFinal={filteredProducts} />
    </header>
  );
}

export default MainNavigation;
