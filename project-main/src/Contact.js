import React from 'react'
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
//import Header from './components/Header';
import { Button, makeStyles, TextField } from '@material-ui/core';
import imag from "./images/contact.png";
import Header from './components/Header';
import Paper from '@material-ui/core/Paper';
import Footer from './components/Footer';
import Alert from '@material-ui/lab/Alert';





const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
            display: "flex",
            width: "50ch"
        },


    },
    main0: {
        backgroundColor: "#020c0f"
    },
    main: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom: "10%"

    },

    paper: {

        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(60),
            height: theme.spacing(70),
        },
    },
    right: {
        textAlign: "center",
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

    },
    title: {
        color: "white",
        paddingTop: "10%",
        textAlign: "center",
        fontSize: 40

    },
    icons: {
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingTop: "5%",
        paddingBottom: "5%"
    },
    form: {
       
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

}));
const handleClick = () => {
    <Alert variant="filled" severity="success">
    This is a success alert — check it out!
  </Alert>
  }

export default function Contact() {
    const classes = useStyles();

    return (
        <div className={classes.main0} >
            <Header />

            <h1 className={classes.title} >HAVE SOME QUESTION?</h1>
            <div className={classes.icons}>
                <div>
                    <RoomIcon /> Faculty of Exact Sciences
            </div>
                <div>
                    <PhoneIcon /> +213 0541807279
            </div>
                <div>
                    <EmailIcon /> Exemple@gmai.com
            </div>
            </div>
            <div className={classes.main}>
                <Paper elevation={3} className={classes.paper} >
                    <div className={classes.right}>
                        <h2 className={classes.title2} >CONTACT US</h2>
                        <form className={classes.root} Validate autoComplete="off">
                            <TextField type="text" label="First Name" variant="outlined" required />
                            <TextField type="text" label="Last Name" variant="outlined" required />
                            <TextField type="email" label="Email" variant="outlined" required/>
                            <TextField type="text"
                                multiline
                                rows={7}
                                label="Message" variant="outlined" required/>
                            <Button onClick={handleClick}
                                type="submit"
                                fullWidth
                                variant="contained"
                                classes={{
                                    root: classes.submit
                                }}
                            >
                                SEND
            </Button>
                        </form>
                    </div>
                </Paper>
                <div className={classes.left}>
                    <img className={classes.imag} src={imag} alt="" width="500px" />
                </div>
            </div>
            <Footer />
        </div>
    )
}



