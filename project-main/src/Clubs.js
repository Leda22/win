import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Avatar} from '@material-ui/core';
import logo from './images/p.png';
import 'antd/dist/antd.css';
import Header from './components/Header';
import Footer from './components/Footer';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: "#020c0f"

    },
    main0: {
        backgroundColor: "#020c0f"
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',

    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),

    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        justifyContent: "center",
        textAlign: "center",
    },
    fixedHeight: {
        height: 240,
    },
    presdnt: {
        display: "flex",
        flexDirection: 'column',

    },
    
    first1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
   
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
      },

}));



// Generate Order Data
function createData(id, logo, date, name, shipTo, paymentMethod, amount) {
    return { id, logo, date, name, shipTo, paymentMethod, amount };
}

const rows = [
    createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 'BADRAT KHAYR'),
    createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 'UTC'),
    createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 'ECO CRAFT'),
    createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
    createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
    createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
    createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),


];


export default function Clubs() {

    const classes = useStyles();
   
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  

    return (
        <div className={classes.main}>
        <div className={classes.root}>
            <Header/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container  className={classes.container}>
                    <Grid container spacing={3}>
                        {/* Recent Deposits */}
                        {rows.map((row) => (
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper elevation={3}
                                    className={fixedHeightPaper}>
                                    <div className={classes.presdnt}>
                                        <Avatar  className={classes.large} src={logo} style={{ alignSelf: 'center' }} />
                                        <h3 style={{ paddingTop: '6%' }}>{row.paymentMethod}</h3>
                                        <p>CLUB</p>
                                    </div>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </div>
        <Footer/>
        </div>
    );
}

