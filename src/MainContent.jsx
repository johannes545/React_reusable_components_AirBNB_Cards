import React from "react";
import Photo from "/public/images/photo-grid.png"

function MainContent(){
    return( 
        <div className="MainContent">
            <img src={Photo} alt="Photo grid" />
            <h1>Online Expirences</h1>
            <p>Join Unique interactive activities led <br /> by one-of-a-kind hosts-all without leaving <br /> home</p>
        </div>
    )
}

export default MainContent