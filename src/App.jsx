import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllRoutes from './AllRouters/AllRoutes'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <div>
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
    </>
  )
}

export default App
