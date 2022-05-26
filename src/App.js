import { useEffect, useState } from 'react'
import './App.css'
// https://fontawesome.com/docs/web/use-with/react/
import Developer from './components/Developer'
import axios from 'axios'

function App() {
  const [devs, setDevs] = useState([])
  const [selectedDev, setSelectedDev] = useState(null)
  // const [devNames, setDevNames] = useState([])
  //setSelectedDev('some value')

  useEffect(() => {
    console.log('USE EFFECT RUNS')
    axios.get('https://node-api-devs-for-hire.glitch.me/devs').then((res) => {
      console.log('RESPONSE RETURNED')
      setDevs(res.data.data)
      // const names = res.data.data.map((dev) => dev.name)
      // setDevNames(names)
    })
  }, [])

  const handleSetSelectedDev = (devId) => {
    const dev = devs.find((dev) => dev.id === devId)
    setSelectedDev(dev)
  }

  if (selectedDev) {
    const dev = selectedDev
    return (
      <>
        <button onClick={() => setSelectedDev(null)}>Reset</button>
        <Developer
          devId={dev.id}
          name={dev.name}
          expertise={dev.expertise}
          key={dev.name}
          gitHubName={dev.gitHub}
          selectDev={handleSetSelectedDev}
        />
      </>
    )
  }
  console.log('RETURN ABOUT TO RUN')
  return (
    <>
      <h1>👩‍💻 Developers for Hire 👩‍💻</h1>
      {devs.map((dev) => {
        if (dev.available) {
          return (
            <Developer
              devId={dev.id}
              name={dev.name}
              expertise={dev.expertise}
              key={dev.id}
              gitHubName={dev.gitHub}
              selectDev={handleSetSelectedDev}
            />
          )
        }
      })}
    </>
  )
}

export default App
