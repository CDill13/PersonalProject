import React from "react";
import {HashRouter, Switch, Route} from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Meetings from "./components/meetings/Meetings";
import Contact from "./components/contact/Contact";
import Membership from "./components/membership/Membership";
import Profile from "./components/membership/profile/profile";

export default (
    <HashRouter>
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/meetings" component={Meetings}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/membership" component={Membership}/>
                <Route path="/profile" component={Profile}/>
            </Switch>
        </div>
    </HashRouter>
)