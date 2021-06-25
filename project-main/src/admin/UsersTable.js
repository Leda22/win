import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Modal from '@material-ui/core/Modal';
import { Avatar, Button, createChainedFunction, Fab, Fade, IconButton, makeStyles, TextField } from '@material-ui/core';
import logo from '../images/p.png';
import EditIcon from '@material-ui/icons/Edit';
import Backdrop from '@material-ui/core/Backdrop';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import Popper from '@material-ui/core/Popper';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Steper from '../components/Steper';
import SteperUpdate from '../components/SteperUpdate';
import { Popconfirm, message } from 'antd';
import DeleteIcon from '@material-ui/icons/Delete'; 
import db from '../firebase';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  ttl: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: "3%",
  },
  paper1: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },

}));

export default function Users() {
  const classes = useStyles();
  const [open, setOpen1] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open2, setOpen2] = useState(false);

  const handleOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);

  };
  const vv = Boolean(anchorEl);
  const id = vv ? 'simple-popper' : undefined;
  const handleOpen2 = () => {
    setOpen2(true)
  };

  const handleClose2 = () => {
    setOpen2(false);

  };

  const [clubs, setClubs] = useState([])
  useEffect(() => {
    db.collection("Clubs").onSnapshot((snapshot) =>
      setClubs(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    )
  }, [])
  function cancel(e) {
    e.preventDefault()
    message.error('Click on No');
  }
  return (
    <React.Fragment>
      <div className={classes.ttl}>
        <Title>CLUBS</Title>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <Fab onClick={handleOpen2} color="primary" aria-label="add" className={classes.margin}>
          <AddIcon />
        </Fab>
      </div>

      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>Clubs</TableCell>
            <TableCell>Club Name</TableCell>
            <TableCell>Club Email</TableCell>
            <TableCell>Club President</TableCell>
            <TableCell>Created At</TableCell>
            <TableCell >Club Phone Number</TableCell>
            <TableCell >Category</TableCell>
            <TableCell >Edit/Del</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clubs.map((club) => (
            <TableRow key={club.id}>
              <TableCell>
                <Avatar width='100px' height='100px' src={club.data.logo} />
              </TableCell>
              <TableCell>{club.data.clubname}</TableCell>
              <TableCell>{club.data.clubemail}</TableCell>
              <TableCell>{club.data.firstname + " " + club.data.lastname}</TableCell>
              <TableCell>{club.data.createdAt}</TableCell>
              <TableCell>{club.data.clubphone}</TableCell>
              <TableCell>{club.data.clubType}</TableCell>
              <TableCell >
                <Button onClick={handleOpen1}><EditIcon /></Button>
                <Popconfirm
                  title="Are you sure to delete this task?"
                  onConfirm={(e) => {
                    e.preventDefault()
                    db.collection('Clubs').doc(club.data.clubname).delete()
                    message.success('Click on Yes')
                  }}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button><DeleteIcon color="Error" /></Button>
                </Popconfirm>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose1}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <SteperUpdate />
        </Fade>

      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open2}
        onClose={handleClose2}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open2}>
          <Steper />
        </Fade>

      </Modal>
    </React.Fragment>

  );
}