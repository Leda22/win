import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
  Link,
} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Admin from "./Admin";
import Clubs from "./Clubs";
import Contact from "./Contact";
import Learn from "./Learn";
import About from "./About";
import db, { auth } from "./firebase";
import { useStateValue } from "./Auth";
import Profils from "./Profils";
import { actionTypes } from "./reducer";


export default function App() {
  const [{ user, admin, president }, dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if ({user}) {
        if ({admin}) {
          dispatch({
            type:actionTypes.SET_ADMIN,
            user: user,
            president:false,
            admin: true
          })
        } else if ({president})  {
          dispatch({
            type:actionTypes.SET_PRES,
            user: user,
            president:true,
            admin: false
          })
        }
      }
    });
  }, [{ user }, { president }, { admin }])
  console.log({ user })
  console.log({ president })
  console.log({ admin })

  return (
    <Router>
      <Switch>
        {admin &&
          <Route exact path='/admin' component={Admin} />}
        {president &&
          <Route exact path='/profil' component={Profils} />}
        {!user &&
          <React.Fragment>
            <Route exact path="/clubs" component={Clubs} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/learn" component={Learn} />
            <Route exact path="/about" component={About} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/clubs' component={Clubs} />
            <Route exact path="/" component={Home} />
          </React.Fragment>}
      </Switch>
    </Router>
  );
}