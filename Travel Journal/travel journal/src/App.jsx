import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./components/Header"
import Note from "./components/Note.jsx"
import data from "./data"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const noteData = data.map(note => {
    return (
    <Note 
      key={note.key}
      {...note}
    />
    )
  })
  return (
    <div className="App">
      <Header/>
      {noteData}
      
    </div>
  )
}

export default App
