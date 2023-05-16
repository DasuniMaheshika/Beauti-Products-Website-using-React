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
                        <Link to="/shop-all">ALL</Link>
                    </li>
                    <div className={classes.dropdown}>
                        <li className={classes.dropbtn}> BRANDS
                            <FontAwesomeIcon icon={faCaretDown} style={{ color: "#535353" }} />
                        </li>
                        <div className={classes.dropdownContent}>
                            <Link id="1" to="/brands/luv-esence">LuvEsence</Link>
                            <Link id="2" to="/brands/4rever">4rever</Link>
                            <Link id="3" to="/brands/janet">Janet</Link>
                            <Link id="4" to="/brands/dr-rashel">DR-RASHEL</Link>
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
