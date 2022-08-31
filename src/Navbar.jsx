import React from "react";
import logo from "/public/images/airbnb-logo.png"

function Navbar(){
    return(
        <div className="Navbar">
            <img src={logo} alt="this is the company logo" />
        </div>
    )
}

export default Navbar