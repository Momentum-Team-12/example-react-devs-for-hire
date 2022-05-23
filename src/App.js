import { useState } from 'react'
import './App.css'
import developerData from './developer-data'
// https://fontawesome.com/docs/web/use-with/react/
import { Developer } from './components/Developer'

function App() {
  const [devs, setDevs] = useState(developerData)

  return (
    <>
      <h1>👩‍💻 Developers for Hire 👩‍💻</h1>
      {devs.map((dev, index) => {
        if (dev.available_for_hire) {
          return (
            <Developer
              name={dev.name}
              expertise={dev.expertise}
              key={index}
              gitHubName={dev.gitHub}
            />
          )
        }
      })}
    </>
  )
}

export default App
