import { useState } from 'react'
import './App.css'
import Presentacion from './components/Presentacion'
import Boton from './components/Boton'
import userImg from "./assets/user.png"
import twitchImg from "./assets/twitchLogo.png"
import discordImg from "./assets/discordLogo.png"
import twitterImg from "./assets/TwitterLogo.png"
import youtubeImg from "./assets/YtLogo.png"
import shortsImg from "./assets/ShortsLogo.png"
import tiktokImg from "./assets/TikTokLogo.png"
import instagramImg from "./assets/IgLogo.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Presentacion
        userName="Franco Balich"
        description="💻Te ayudo a aprender sobre tecnologia."
        img={userImg}
      ></Presentacion>

      <Boton
        img={twitchImg}
        title="Twitch🎥"
        subtitle="FrancoLabs"
        socialNetwork="twitch"
        link='https://www.twitch.tv/francolabs'
      ></Boton>
      <Boton
        img={discordImg}
        title="Discord⚡"
        subtitle="¡Reuniones todos los Miercoles!"
        socialNetwork="discord"
        link="https://discord.gg/Pvj6ZH2FPf"
      ></Boton>
      <Boton
        img={instagramImg}
        title="Instagram📷"
        subtitle="@francobalich"
        socialNetwork="instagram"
        link="https://www.instagram.com/francobalich/"
      ></Boton>
      <Boton
        img={youtubeImg}
        title="Canal Principal🎬"
        subtitle="Franco Balich"
        socialNetwork="youtube"
        link="https://www.youtube.com/c/FrancoBalich"
      ></Boton>
      <Boton
        img={shortsImg}
        title="Canal de Shorts📲"
        subtitle="Franco Balich Shorts"
        socialNetwork="shorts"
        link="https://www.youtube.com/channel/UCkfKL2dk7rq5qqonbtPO9-Q"
      ></Boton>
      <Boton
        img={twitterImg}
        title="Twitter🐦"
        subtitle="@francobalich"
        socialNetwork="twitter"
        link="https://twitter.com/francobalich"
      ></Boton>
      <Boton
        img={tiktokImg}
        title="TikTok📱"
        subtitle="@francobalich"
        socialNetwork="tiktok"
        link="https://www.tiktok.com/@francobalich?"
      ></Boton>
    </div>
  )
}

export default App
