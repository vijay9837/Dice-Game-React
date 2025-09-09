
import './App.css'
import Home from './component/Home'
import MainGame from './component/MainGame'
import { Routes } from 'react-router'
import { Route } from 'react-router-dom'
import { useLocation } from 'react-router'

function App() {

  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/game' element={<MainGame/>} />
  </Routes>

  const location = useLocation()
  const isHomePage = location.pathname



  return (
    <>
    <div className='h-screen w-full '>
      {isHomePage === '/' ?  <Home/>: <MainGame/>}
    </div>
    
    </>
  )
}

export default App
