import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <h1>Map demo application</h1>
        <div id="map"></div>
    </div>
  )
}

export default App
