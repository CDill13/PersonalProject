import React from "react";
import "./nav.css";

export default function Nav() {
    return(
        <div className="nav">
            <a href="/#/" >HOME</a>
            <a href="/#/about" >ABOUT</a>
            <a href="/#/meetings" >MEETINGS</a>
            <a href="/#/contact" >CONTACT</a>
            <a href="/#/membership" >MEMBERSHIP</a>
        </div>
    )
}