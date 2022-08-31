import React from "react";


function Card(props){

    
    return(
        
        <div className="Card">
            {props.tag === 0 && <div className="card--badge">SOLD OUT</div>}
            {props.tag > 0 && <div className="card--badge">Available. {props.tag} slots left</div>}
            <img src={props.img} alt="Coach" />
            <p className="star_p"><span><img className="star" src={props.star} alt="star" /></span> ({props.review}) - {props.country}</p>
            <p>{props.title}</p>
            <h3>From {props.price} / person</h3>
        </div>
    )
}

export default Card