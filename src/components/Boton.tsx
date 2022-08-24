import React from "react";
import "../styles/Boton.css"
interface propsButton{
    img:any,
    title:string,
    subtitle:string,
    socialNetwork:string,
    link:string
}
function Boton({img,title,subtitle,socialNetwork,link}:propsButton){
    return(
        <div className={`buttonContainer no-seleccionable ${socialNetwork}`}>
            <a href={link}>
                <img className="buttonImg" src={img} alt={`Foto de ${socialNetwork}`}/>
                <div className="textContainer">
                    <p className="buttonTitle">{title}</p>
                    <p className="buttonSubtitle">{subtitle}</p>
                </div>
            </a>
        </div>
    )
}

export default Boton;