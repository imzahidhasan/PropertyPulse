import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  AOS.init();
  return (
    <>
      <div className='relative font-poppins'>
      <Navbar />
      <Outlet/>
      <Footer/>
      </div>
    </>
  )
}

export default App
