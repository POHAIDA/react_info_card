import React from "react";

export default function About({title,description}){
    return(
        <div className="about">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}