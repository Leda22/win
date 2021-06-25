import React from 'react'
//import { Redirect } from 'react-router-dom'

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Profil from './presidents/Profil';
import Calendar from './presidents/Calendarpr';
import Profiluser from './presidents/Profiluser';


function Profils() {
    return (
        <Router>
        <Switch>
        <Route exact path="/profil" component={Profil}/>
        <Route exact path="/profil/calendar" component={Calendar}/>
        <Route exact path="/profil/@username" component={Profiluser}/>
        </Switch>
    </Router>
    )
}

export default Profils
