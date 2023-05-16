import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav className={classes.navigation}>
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/shop-all">SHOP-ALL</Link>
                    </li>
                    <div className={classes.dropdown}>
                        <li className={classes.dropbtn}> BRANDS
                            <FontAwesomeIcon icon={faCaretDown} style={{ color: "#535353" }} />
                        </li>
                        <div className={classes.dropdownContent}>
                            <Link to="/brands">LuvEsence</Link>
                            <Link to="/brands">4rever</Link>
                            <Link to="/brands">Janet</Link>
                            <Link to="/brands">DR-RASHEL</Link>
                        </div>
                    </div>
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
