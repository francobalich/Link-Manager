import React from "react";
import "../styles/Boton.css"
interface propsButton{
    img:any,
    title:string,
    subtitle:string,
    socialNetwork:string
}
function Boton({img,title,subtitle,socialNetwork}:propsButton){
    return(
        <div className={`buttonContainer ${socialNetwork}`}>
            <img className="buttonImg" src={img} alt={`Foto de ${socialNetwork}`}/>
            <div className="textContainer">
                <p className="buttonTitle">{title}</p>
                <p className="buttonSubtitle">{subtitle}</p>
            </div>
        </div>
    )
}

export default Boton;