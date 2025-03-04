// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Content from './components/Content/Content'
import Filter from './components/Filter/Filter'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {
  

  return (
    <>
    <div className='header'><Header></Header></div>
     <div className='row'>
      <div className='side'><Filter></Filter></div>
      <div className='main'><Content></Content></div>
      </div> 
      <div className='footer'><Footer></Footer></div>
      
    </>
  )
}

export default App
