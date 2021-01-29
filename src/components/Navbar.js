import React from 'react';
import {  Link  } from 'react-router-dom';


export default function Navbar(props) {

    var profileData = props.profileData;

    const showProfile = () => {
        console.log("showProfile")
    }

    return (
        <nav className="navbar">
            <Link to="/"><img src={props.logo}  className="logo"/></Link>
            <h1>Earthquake Zen Garden</h1>
            <Link to="/profile"><p onClick={showProfile}>Welcome {props.name}</p></Link>
        </nav>
    )
}
