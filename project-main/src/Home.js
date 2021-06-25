import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import bg from "./images/bg.png";
import tsk from "./images/task.png";

import { Button } from '@material-ui/core';
import Counter from './components/Counter';
import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';





const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#020c0f',
        paddingTop: '5%',
        padding: '0%',
        height: '100%',
    },
    left: {
        flex: '48%',
    },
    right: {
        flex: '48%',

    },
    header: {
        paddingTop: '10%',
        paddingLeft: '15%',
        fontSize: '60px',
        color: '#18a89f',
        fontFamily: 'Marko One',
        '@media (max-width: 800px)': {
            fontSize: '35px',
        },
        '@media (max-width: 400px)': {
            fontSize: '35px',
        },
    },
    header1: {
        paddingTop: '10%',
        textAlign: 'center',
        fontSize: '60px',
        color: '#18a89f',
        fontFamily: 'Marko One',
        '@media (max-width: 800px)': {
            fontSize: '35px',
        },
        '@media (max-width: 400px)': {
            fontSize: '20px',
        },
    },

    bg: {
        width: '100%',
        height: '100%',
    },
    tsk: {
        height: '100%',
        paddingTop:"10%",
        paddingLeft:'10%',
        '@media (max-width: 800px)': {
            padding: '0',
        },
        '@media (max-width: 400px)': {
            padding: '0',
        },
    },
    paragraph: {
        paddingTop: '5%',
        paddingLeft: '10%',
        fontSize: '28px',
        color: 'white',
        lineHeight: '1.5',
        fontFamily: 'Times New Roman',
        '@media (max-width: 800px)': {
            fontSize: '24px',
            padding: '10%',
        },
        '@media (max-width: 400px)': {
            fontSize: '20px',
            padding: '5%',

        },
    },
    btn: {
        width: "25%",
        marginLeft: "25%",
        marginTop: "5%",
        marginBottom: "10%",
        background: "linear-gradient(50deg, #339999 30%, #336699 90%)",
        borderRadius: 25,
        border: 0,
        color: "white",
        height: 48,
        padding: "0",
        boxShadow: "0 3px 5px 2px rgba(0,0,0,0.15)",
        '@media (max-width: 800px)': {
            padding: '0',
            marginTop: "2%",
        },
        '@media (max-width: 400px)': {
            padding: '0',
        },
    },
    input: {
        display: 'none',
    },
    main: {
        display: 'flex',
        flexDirection: 'row',
        paddingRight: '10px',
        '@media (max-width: 800px)': {
            flexDirection: 'column',
        },
    },
card: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '5%',
        paddingBottom:'5%',
        marginLeft: '7.5%',
        width: '85%',
        justifyContent:'space-between',

        '@media (max-width: 800px)': {
            flexDirection: 'column',
        },
    }
}));


export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header/>
            <div className={classes.main}>
                <div className={classes.left}>
                    <h1 className={classes.header}>what's a club</h1>
                    <p className={classes.paragraph}>
                        A club is an association of people united
                        by a common interest or goal.
                        A service club, for example,
                        exists for voluntary or charitable activities.
                        There are clubs devoted to hobbies and sports,
                        social activities clubs,
                        political and religious clubs, and so forth...
                </p>
                    {/* upload button */}
                    {/* <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" component="spanS" classes={{
                            root: classes.btn
                        }} >
                        Upload
                    </Button>
                </label> */}

                    <Button
                          component={Link} to="/learn"

                        fullWidth
                        variant="contained"
                        classes={{
                            root: classes.btn
                        }}
                    >
                        Learn More
                </Button>


                </div>
                <div className={classes.right}>
                    <img className={classes.bg} src={bg} alt="" />
                </div>
            </div>
            <Counter />
            <div className={classes.main}>
                <div className={classes.left}>
                    <img className={classes.tsk} src={tsk} alt="" />

                </div>
                <div className={classes.right}>
                    <h1 className={classes.header}>Our Clubs</h1>
                    <p className={classes.paragraph}>
                    Follow the Clubs That 
                    you are interessted in 
                    </p>
                    <Button
                        fullWidth
                        variant="contained"
                        href="/clubs"
                        classes={{
                            root: classes.btn
                        }}
                    >
                        Clubs
                    </Button>
                </div>
            </div>
            <h1 className={classes.header1}>Latest Activities</h1>
            <div className={classes.card}>
            <Card/>
            <Card/>
            <Card/>

            </div>
            <Footer/>
        </div>

    );

    
}
 

