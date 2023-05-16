import React from 'react';
import classes from './Header.module.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className={classes.main}>

      <nav className={classes.navigation1}>
        <p className={classes.para1}>
          <FontAwesomeIcon icon={faPlane} style={{ color: "#000000", }} />
          Sri Lanka deliveries in 3 to 5 business days
          <FontAwesomeIcon icon={faHeart} style={{ color: "#000000", }} />
          Free and fast shipping for order above $ 140.00
        </p>
      </nav>

      <nav className={classes.navigation2}>
        <div className={classes.logo}>
          <FontAwesomeIcon icon={faLeaf} size="2xl" style={{ color: "#3adfad", }} />
          GlowZone
        </div>
        <div className={classes.search}>
          <input
            type="text"
            className={classes.textbox}
            placeholder="Search data..."
          />
          <button className={classes.searchbtn} type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#000000", }} /></button>
        </div>

        <ul>
          <li>
            <FontAwesomeIcon icon={faCartShopping} style={{ color: "#000000", }} />
            <Link to="/cart">CART</Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} style={{ color: "#000000", }} />
            <Link to="/login">LOGIN</Link>
          </li>
        </ul>
      </nav>

      <nav>
        <div className={classes.gridContainer}>
          <div className={classes.gridItem}>Brand of the Month</div>
          <div className={classes.gridItem}>Weekly Deals</div>
          <div className={classes.gridItem}>Summer Store-Up to 50% OFF</div>
        </div>
      </nav>

    </header>
  )
}

export default Header;

