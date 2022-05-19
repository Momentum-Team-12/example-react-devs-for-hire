import './App.css'

function App() {
  return (
    <>
      <h1>👩‍💻 Developers for Hire 👩‍💻</h1>
      <Developer name="Jessica" />
      <Developer name="Hillary" />
      <Developer name="Stephen" />
      <Developer name="Jamie" />
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
