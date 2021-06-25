import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Uploadlg from '../admin/Uploadlg';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import swal from 'sweetalert';
import db, { auth, storage } from '../firebase';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${ index }`,
  'aria-controls': `simple-tabpanel-${ index }`
}
}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  paper1: {
    backgroundColor: "white",
    padding: theme.spacing(1, 3, 2),

  },
  form1: {
    '& > *': {
      margin: theme.spacing(2),
      width: "40ch"
    },
    display: "flex",
    flexDirection: "column"
  },

  first1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  fixedHeight: {
    height: 600,
  },
}));


export default function SimpleTabs() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [value, setValue] = React.useState(0);
  const [gender, setGender] = useState('male');
  const [clubType, setClubType] = useState('Science Club');
  const [firstName, setFirstName] = useState('')
  const [clubName, setClubName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [city, setCity] = useState('')
  const [createdAt, setCreatedAt] = useState('')
  const [logo, setLogo] = useState(null)
  const [clubEmail, setClubEmail] = useState('')
  const [presidentEmail, setPresidentEmail] = useState('')
  const [clubPhone, setClubPhone] = useState('')
  const [presidentPhone, setPresidentPhone] = useState('')
  const [university, setUniversity] = useState('')
  const [college, setCollege] = useState('')
  const [academicLevel, setAcademicLevel] = useState('')
  const [slogan, setSlogan] = useState('')


  const handleChange = (event, newValue) => {
    setValue(newValue);

  };
  const handleClubType = (event) => {
    setClubType(event.target.value);
  };
  const handleGender = (event) => {
    setGender(event.target.value);
  };

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    await fileRef.getDownloadURL().then((res)=>  db.collection("Clubs").doc(clubName).set({
      logo: res,
    }))
  }
  

  function AddClub(e) {
    e.preventDefault()
    swal("Thank You", "Club added successfully", "success");
    auth.createUserWithEmailAndPassword(presidentEmail,clubName)
    db.collection('Clubs').doc(clubName).update({
      firstname: firstName,
      lastname: lastName,
      birthday: birthday,
      gender: gender,
      city: city,
      slogan: slogan,
      clubType: clubType,
      presidentemail: presidentEmail,
      presidentphone: presidentPhone,
      university: university,
      college: college,
      academicLevel: academicLevel,
      clubname: clubName,
      createdAt: createdAt,
      clubemail: clubEmail,
      clubphone: clubPhone,
    })
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="CLUB INFO" {...a11yProps(1)} />
          <Tab label="ADD LOGO" {...a11yProps(0)} />
          <Tab label="PRESIDENT INFO" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={1}>
        <Grid>
          <Paper className={fixedHeightPaper}>
            <h3 style={{ textAlign: 'center' }}>ADD CLUB LOGO</h3>
            <input type="file" onChange={onFileChange} />
          </Paper>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={0}>
        <Grid>
          <Paper className={fixedHeightPaper}>
            <h3 style={{ textAlign: 'center' }}>ADD CLUB</h3>
            <form className={classes.form1} Validate autoComplete="off">
              <TextField
                required={true}
                label="Club Name"
                value={clubName}
                onChange={(e) => { setClubName(e.target.value) }}
              />
              <TextField
                required={true}
                type="date"
                label="Created At"
                value={createdAt}
                onChange={(e) => { setCreatedAt(e.target.value) }}
              />
              <TextField
              required={true}
                type="email"
                label="Club Email"
                value={clubEmail}
                onChange={(e) => { setClubEmail(e.target.value) }}
              />
              <TextField
                type='tel'
                required={true}
                label="Phone number"
                value={clubPhone}
                onChange={(e) => { setClubPhone(e.target.value) }}
              />
              <FormControl component="fieldset">
                <FormLabel component="legend">Category</FormLabel>
                <RadioGroup aria-label="category" name="category" value={clubType} onChange={handleClubType}>
                  <FormControlLabel value="Science Club" control={<Radio />} label="Science Club" />
                  <FormControlLabel value="Cultural Club" control={<Radio />} label="Cultural Club" />
                  <FormControlLabel value="Sport Club" control={<Radio />} label="Sport Club" />
                </RadioGroup>
              </FormControl>
              <TextField
                id="standard-multiline-static"
                label="Slogan"
                multiline
                rows={2}
                value={slogan}
                  onChange={(e) => { setSlogan(e.target.value) }}
              />
            </form>
          </Paper>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid>
          <Paper className={fixedHeightPaper}>
            <h3 style={{ textAlign: 'center' }}>ADD PRESIDENT CLUB</h3>
            <form className={classes.form1} Validate autoComplete="on">
              <div className={classes.first1}>
                <TextField
                required={true}
                  type="text"
                  label="First Name"
                  value={firstName}
                  onChange={(e) => { setFirstName(e.target.value) }}
                />
                <TextField
                required={true}
                  type="text"
                  label="Last Name"
                  value={lastName}
                  onChange={(e) => { setLastName(e.target.value) }}
                />
              </div>
              <TextField
              required={true}
                label="Birthday"
                type="date"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                value={birthday}
                onChange={(e) => { setBirthday(e.target.value) }}
              />
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup required={true} aria-label="gender" name="gender1" value={gender} onChange={handleGender}>
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
              </FormControl>
              <TextField
              required={true}
                type="text"
                label="City"
                value={city}
                onChange={(e) => { setCity(e.target.value) }}
              />
              <TextField
              required={true}
                type="email"
                label="President Email"
                value={presidentEmail}
                onChange={(e) => { setPresidentEmail(e.target.value) }}
              />
              <TextField
              required={true}
                type='tel'
                label="Phone number"
                value={presidentPhone}
                onChange={(e) => { setPresidentPhone(e.target.value) }}
              />
              <TextField
              required={true}
                type="text"
                label="University"
                value={university}
                onChange={(e) => { setUniversity(e.target.value) }}
              />
              <TextField
              required={true}
                type="text"
                label="College"
                value={college}
                onChange={(e) => { setCollege(e.target.value) }}
              />
              <TextField
              required={true}
                type="text"
                label="Academic level"
                value={academicLevel}
                onChange={(e) => { setAcademicLevel(e.target.value) }}
              />
              <Button variant="contained" size="large" type="submit" color="primary" onClick={AddClub}>
                ADD
              </Button>
            </form>
          </Paper>
        </Grid>
      </TabPanel>
    </div>
  );
}