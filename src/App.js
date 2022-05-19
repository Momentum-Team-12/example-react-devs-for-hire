import { useState } from 'react'
import './App.css'

function App() {
  const [devs, setDevs] = useState(['Jessica', 'Hillary', 'Stephen', 'Jamie'])

  return (
    <>
      <h1>👩‍💻 Developers for Hire 👩‍💻</h1>
      {devs.map((dev, index) => (
        <Developer name={dev} key={index} />
      ))}
    </>
  )
}

function Developer({ name }) {
  return (
    <div className="dev">
      <p className="dev--name">{name}</p>
      <p>Skills: Front-end and React</p>
    </div>
  )
}

export default App
