import React from 'react';
import {BrowserRouter as Router,Link,Switch,Route} from "react-router-dom";
import Navbar from "../components/Navbar"
import {SignIn} from "../pages/SignIn"
import {SignUp} from "../pages/SignUp";

const RouterApp = () => {

    return (
        <Router>
            <Navbar/>
            <Route path="/register" component={SignUp}/>
            <Route path="/SignIn"  component={SignIn}/>
        </Router>
    )
}

export default RouterApp;
