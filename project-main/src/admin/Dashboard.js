import React, { useContext, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import ListItems from './listItems';
import Chart from './Chart';
import Table from './Table';
import { Avatar, Menu, MenuItem, withStyles } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EmailIcon from '@material-ui/icons/Email';
import SchoolIcon from '@material-ui/icons/School';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EventIcon from '@material-ui/icons/Event';
import Sliderr from '../components/Sliderr';
import { auth } from '../firebase';
import { useStateValue } from '../Auth';
import { actionTypes } from '../reducer';
import { Redirect, useHistory } from 'react-router-dom';




function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
   ' & p':{
      textAlign:"center",
      color:"grey",
      fontSize:"14px"
    }
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
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
  },
  fixedHeight: {
    height: 400,
  },
  fixedHeight1:{
    height:200,
  },
 

}));
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));


export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeight1Paper = clsx(classes.paper, classes.fixedHeight1);
  const fixedHeightGrid = clsx(classes.Grid, classes.fixedHeight);
  const fixedHeight1Grid = clsx(classes.Grid, classes.fixedHeight1);

  let history = useHistory()

  const [{ admin, president }, dispatch] = useStateValue()
  const logout = () => {
    auth.signOut()
    dispatch({
      type:actionTypes.SET_ADMIN,
      admin: false
    }),
    history.push('/login')
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={7} color="secondary">
              <EmailIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton onClick={handleClick} color="inherit">
            <Avatar />
          </IconButton>
          <StyledMenu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <SettingsIcon />
            Settings
            </MenuItem>
            <MenuItem onClick={logout}>
              <ExitToAppIcon />
            Logout
            </MenuItem>
          </StyledMenu>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <ListItems />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Recent Deposits */}
                <Grid item xs={3}>
                  <Paper elevation={3} className={fixedHeight1Paper}>
                    <SchoolIcon style={{alignSelf:"center"}}/> 
                    <h1 style={{textAlign:"center"}}>1</h1>
                    <p>CLUBS</p>
                  </Paper>
                </Grid>
                <Grid item xs={3} >
                  <Paper elevation={3} className={fixedHeight1Paper}>
                    <VisibilityIcon style={{alignSelf:"center"}}/>
                    <h1 style={{textAlign:"center"}}>0</h1>
                    <p >VISITOR</p>
                  </Paper>
                </Grid>
                <Grid item xs={3} >
                  <Paper elevation={3} className={fixedHeight1Paper}>
                    <EventIcon style={{alignSelf:"center"}}/>
                    <h1 style={{textAlign:"center"}}>0</h1>
                    <p >OLD ACTIVITIES</p>
                  </Paper>
                </Grid>
                <Grid item xs={3} >
                  <Paper elevation={3} className={fixedHeight1Paper}>
                  <EventIcon style={{alignSelf:"center"}}/>
                  <h1 style={{textAlign:"center"}}>0 </h1>
                    <p >UPCOMING ACTIVITIES</p>
                  </Paper>
                </Grid>
                <Grid item xs={8} >
                <Paper elevation={3} className={fixedHeightPaper}>
		<Sliderr/>
               </Paper>
              </Grid>
            {/* Chart */}
            <Grid item xs={4}>
              <Paper elevation={3} className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>
            {/* Recent UsersTable */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Table />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}