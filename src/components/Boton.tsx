import React from "react";
import {useState, useEffect} from "react"
import "../styles/Boton.css"

interface propsButton{
    img:string,
    title:string,
    subtitle:string,
    style:string,
    link:string
}
function Boton({img,title,subtitle,style,link}:propsButton){
    const [image, setImage] = useState("")
    function importImage(imageName:string){
        import(`../assets/${imageName}.png`)
        .then((image)=>setImage(image.default));
    }
    importImage(img)
    return(<div className={`buttonContainer no-seleccionable ${style}`}>
    <a href={link}>
        <img className="buttonImg" src={image} alt={`Foto de ${style}`}/>
        <div className="textContainer">
            <p className="buttonTitle">{title}</p>
            <p className="buttonSubtitle">{subtitle}</p>
        </div>
    </a>
</div>)
}

export default Boton;