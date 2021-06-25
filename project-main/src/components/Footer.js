import React from 'react';
import { makeStyles } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import fav from "../images/login.svg";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  bg: {
    background: "linear-gradient(50deg, #339999 30%, #336699 90%)",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: "5px",
    height: "60px"

  },
  bg1: {
    color: "white"
  },
  bg2: {},
  bg3: {
    color: "white"
  }
}));
export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.bg}>
      <div className={classes.bg1}>
        <p>© 2021 UNIV CLUB </p>
      </div>
      <div className={classes.bg2}>
        <img src={fav} alt="" height="25px" />
      </div>
      <div className={classes.bg3}>
        <EmailIcon />
        <FacebookIcon />
        <InstagramIcon />
      </div>
    </div>
  );
}
