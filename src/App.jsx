import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import SinglePlayerCard from './components/SinglePlayerCard/SinglePlayerCard'
import SearchBar from './components/SearchBar/SearchBar'
import './App.css'

function App() {
  const [players,setPlayers] = useState([])
  return (
    <>
      <div>
        <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/players' element={<SearchBar />} />
        <Route path='/players/:id' element={<SinglePlayerCard puppy={players} />} />
      </Routes>
      
      </div>
    </>
  )
}

export default App
