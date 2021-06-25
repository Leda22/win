import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./images/login.svg";
import Log from "./images/login.png";
import {useHistory} from 'react-router-dom'
import Header from "./components/Header";
import db, {auth} from './firebase'
import { AuthContext, useStateValue } from "./Auth";
import { useContext } from "react"; 
import { actionTypes } from "./reducer";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Univ Club
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${Log})`,
    backgroundRepeat: "no-repeat",
    backgroundColor: "#020c0f",
    backgroundSize: "75%",
    backgroundPosition: "center",

  },
  paper: {
    height: "100vh",
    margin: theme.spacing(15, 8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    marginTop: "70px",
    margin: theme.spacing(1),
    width: theme.spacing(7),
    height: theme.spacing(7),
    backgroundColor: "#336699"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: "70px",

    "& label.Mui-focused": {
      color: "#336699"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#336699"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#336699"
      },
      "&:hover fieldset": {
        borderColor: "#336699"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#336699"
      }
    }
  },
  submit: {
    width: "50%",
    marginLeft: "25%",
    marginTop: "10px",
    marginBottom: "50px",
    background: "linear-gradient(50deg, #339999 30%, #336699 90%)",
    borderRadius: 25,
    border: 0,
    color: "white",
    height: 48,
    padding: "0px 30px",
    boxShadow: "0 3px 5px 2px rgba(0,0,0,0.15)",
  },
  formControl: {
    marginTop: 20,
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [{user},dispatch] = useStateValue()

  let history = useHistory()

  const signIn =(event)=>{
    event.preventDefault()
    auth.signInWithEmailAndPassword(email,password).then((result)=>{
      if(email == 'abc@abc.com' && password == '456123123'){
        dispatch({
          type:actionTypes.SET_ADMIN,
          user: result.user,
          president:false,
          admin: true
        })
        history.push('/admin')
      }
      else {
        dispatch({
          type:actionTypes.SET_PRES,
          user: result.user,
          president:true,
          admin: false
        })
        history.push('/profil')
      }
    })
  }

  return (
    <Grid container component="main" className={classes.root} >
      <Header/>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <img src={Logo} alt="" width="29px" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              type='text'
              placeholder='Username'
              onChange={(e) => { setEmail(e.target.value) }}
            />
            <TextField
              variant="outlined"
              type='password'
              placeholder='Password'
              autoComplete="true"
              onChange={(e) => { setPassword(e.target.value) }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={signIn}
              classes={{
                root: classes.submit
              }}
            >
              Sign In
            </Button>
            <Copyright />
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
