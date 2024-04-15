import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <div className='relative'>
      <Navbar />
      <Outlet/>
      <Footer/>
      </div>
    </>
  )
}

export default App
