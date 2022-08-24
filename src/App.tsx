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
      ></Boton>
      <Boton
        img={discordImg}
        title="Discord⚡"
        subtitle="¡Reuniones todos los Miercoles!"
        socialNetwork="discord"
      ></Boton>
      <Boton
        img={instagramImg}
        title="Instagram 📷"
        subtitle="@francobalich"
        socialNetwork="instagram"
      ></Boton>
      <Boton
        img={youtubeImg}
        title="Canal Principal 🎬"
        subtitle="Franco Balich"
        socialNetwork="youtube"
      ></Boton>
      <Boton
        img={shortsImg}
        title="Canal de Shorts 📲"
        subtitle="Franco Balich Shorts"
        socialNetwork="shorts"
      ></Boton>
      <Boton
        img={twitterImg}
        title="Twitter 🐦"
        subtitle="@francobalich"
        socialNetwork="twitter"
      ></Boton>
      <Boton
        img={tiktokImg}
        title="TikTok📱"
        subtitle="@francobalich"
        socialNetwork="tiktok"
      ></Boton>
    </div>
  )
}

export default App
