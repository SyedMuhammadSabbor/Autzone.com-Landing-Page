import React from 'react'
import Header from './Components/Header/Header'
import './App.css'
import { Route , Routes,  } from 'react-router-dom'
import HomePage from './Components/Pages/HomePage/HomePage'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <>
    <Header></Header>
       <Routes>
       <Route exact path="/" element={<HomePage />} />
       </Routes>
    <Footer></Footer>
    </>
  )
}

export default App
