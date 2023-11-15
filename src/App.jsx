import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Pages/Navbar'

function App() {

  return (
    <div className='lg:max-w-[1200px] mx-auto'>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default App