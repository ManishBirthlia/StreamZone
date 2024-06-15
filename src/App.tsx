import Navbar from './components/Navbar/navbar' 
import Hero from './components/Hero/hero'
import './App.css'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import NotFound from './components/NotFound/notfound'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes >
        <Route path='/' element={<Hero />} />
        <Route path='/404' element={<NotFound />} />
        <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
