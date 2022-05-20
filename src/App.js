import { useState } from 'react'
import './App.css'
import developerData from './developer-data'

function App() {
  const [devs, setDevs] = useState(developerData)

  return (
    <>
      <h1>👩‍💻 Developers for Hire 👩‍💻</h1>
      {devs.map((dev, index) => (
        <Developer
          name={dev.name}
          expertise={dev.expertise}
          available_for_hire={dev.available_for_hire}
          key={index}
        />
      ))}
    </>
  )
}

function Developer({ name, expertise, available_for_hire }) {
  return (
    <div className="dev">
      <p className="dev--name">{name}</p>
      <p>{expertise}</p>
    </div>
  )
}

export default App
