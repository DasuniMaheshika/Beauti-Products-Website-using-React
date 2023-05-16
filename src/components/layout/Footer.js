/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className={classes.body}>
      <div className={classes.footer}>
        <div className={classes.logo}>
          <FontAwesomeIcon icon={faLeaf} size="2xl" style={{ color: "#3adfad", }} />
          GlowZone
          <p className={classes.address}>No.56, Galle Rd, Colombo 04, Sri Lanka.</p>
        </div>
        <div>
          <p className={classes.title}>About</p>
          <p className={classes.about}>About Us | Contact Us | FAQ | Terms of Service</p>
        </div>
        <div>
          <p className={classes.title}>Get in touch</p>
          <p className={classes.about}>
          <FontAwesomeIcon icon={faPhoneVolume} style={{color: "rgb(97, 97, 97)",}} />
          077 373 7008 | 
          <FontAwesomeIcon icon={faEnvelope} style={{color: "rgb(97, 97, 97)",}} />
           Email Us
          </p>
        </div>
      </div>
      
      <div className={classes.copyright}>
        {`Glow Zone Sri Lanka © ${year} All Right Reserved.`}
      </div>
    </div>
  );
}

export default Footer;
