import { useState } from 'react'
import Navbar from './components/Navbar/navbar' 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    </>
  )
}

export default App
