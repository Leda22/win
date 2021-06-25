import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
    counter: {
        display: 'flex',
        flexDirection: 'row',
        background: 'linear-gradient(45deg, #339999 30%, #336699 90%)',
        color: 'white',
        height: '25vh',
        justifyContent: 'space-between',
        fontSize: '55px',
        marginTop: '5%',
    },
    paper: {
        textAlign: 'center',
        color: 'white',
        fontSize: '30px',
        width: '50%',
        justifyContent: 'space-between',
    },
    span:{
        fontSize: 60,
        marginBottom:20
    },
    p:{
        textTransform:'uppercase',
        fontSize: 20,
    }
}))    
    




export default function Counter() {
    const classes = useStyles();
    //eslint-disable-next-line
    const [count, setCount] = useState(0);
        //eslint-disable-next-line
    const [count1, setCount1] = useState(0);
        //eslint-disable-next-line
    const [count2, setCount2] = useState(0);
    return (
        <div className={classes.counter}>
            <div className={classes.paper}>
                <p className={classes.span}>{count}</p>
                <p className={classes.p}>Scientific Club</p>
            </div>
            <div className={classes.paper}>
                <p className={classes.span}>{count1}</p>
                <p className={classes.p}>Cultural Club</p>
            </div>
            <div className={classes.paper}>
                <p className={classes.span}>{count2}</p>
                <p className={classes.p}>Sports Club</p>
            </div>
        </div>
    )
}

