import React from "react";

import userBanner from "../assets/background.png"
import "../styles/Presentacion.css"

interface MsgProps{
    userName:string,
    description:string,
    img:any
}

function Presentacion({userName,description,img}: MsgProps){
    return (
        <div className="userContainer">
            <div className="userBanner">
                <img src={userBanner} alt="Banner de usuario"/>
                <div className="spaceBanner">

                </div>
            </div>
            <div className="userData">
                <img src={img} className="userImg" alt={`Foto de ${userName}`} />
                <div className="userTextData">
                    <h1 className=''>{userName}</h1>
                    <p className="userDescription">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Presentacion;