import React from "react"
import Button from "./button/Button"

function MainInfo(){
    return(
        <div>
            <figure className="photo-section">
                <img src="./images/myPhoto.png"/>
                <figcaption>Pohaida Viktor</figcaption>
                <p>Frontend developer</p>
                <a href="https://pohaida.github.io/myWorks/" target="_blank">pohaida.github.io/myWorks/</a>
            </figure>
            <div className="buttons_container">
                <Button><span><img src="./icons/Mail.png"/></span> Email</Button>
                <Button><span><img src="./icons/linkedin.png"/></span><a href="https://www.linkedin.com/in/viktor-pohaida-960395272/" target="_blank">Linkedin</a></Button>
            </div>
           
        </div>
    )
}

export default MainInfo