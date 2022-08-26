import { useState } from 'react'
import './App.css'
import Presentacion from './components/Presentacion'
import Boton from './components/Boton';
import userImg from "./assets/user.png"
import dataLink from "./json/data.json"

function App() {
  let htmlBotones:JSX.Element[]=[];
  htmlBotones =  Object.values(dataLink["franco"]).map(boton=>
  <Boton key={boton.titulo} // Se agrega el key como ID para que React maneje mejor los objetos
    img={boton.img}
    title={boton.titulo}
    subtitle={boton.subtitulo}
    style={boton.estilo}
    link={boton.link}
  ></Boton>)
    console.log(htmlBotones);
  return (
    <div className="App">
      <Presentacion
        userName="Franco Balich"
        description="💻Te ayudo a aprender sobre tecnologia."
        img={userImg}
      ></Presentacion>
      {
        htmlBotones
      }
    </div>
  )
}

export default App
