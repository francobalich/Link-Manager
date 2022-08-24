import { useState } from 'react'
import './App.css'
import Presentacion from './components/Presentacion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Presentacion
        userName="Franco Balich"
        description="💻 Te ayudo a aprender sobre tecnologia."
      ></Presentacion>
    </div>
  )
}

export default App
