
import Header from "./components/Header"
import Note from "./components/Note.jsx"
import data from "./data"
import './App.css'

function App() {
  const notes = data.map(note => {
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
      {notes}
      
    </div>
  )
}

export default App
