import { useState } from 'react'
import './App.css'
import developerData from './developer-data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [devs, setDevs] = useState(developerData)

  return (
    <>
      <h1>👩‍💻 Developers for Hire 👩‍💻</h1>
      {devs.map((dev, index) => {
        if (dev.available_for_hire) {
          return (
            <Developer name={dev.name} expertise={dev.expertise} key={index} />
          )
        }
      })}
    </>
  )
}

function Developer({ name, expertise }) {
  return (
    <div className="dev">
      <p className="dev--name">{name}</p>
      <p>{expertise}</p>
    </div>
  )
}

export default App
