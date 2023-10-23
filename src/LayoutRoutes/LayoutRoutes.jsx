
import React from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Home from '../Components/Pages/Home'
import Plans from '../Components/Pages/Plans/Plans'
import Courses from '../Components/Pages/Courses/Courses'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import AboutUS from '../Components/Pages/AboutUS/AboutUS'

const LayoutRoutes = () => {
  return (
    <Router>
        <Header/>
        <Home/>
        <Routes>
            <Route path='/' element={Home}/>
            <Route path='/Edu-Tech' element={Home}/>
            <Route path='/services' element={Plans}/>
            <Route path='/courses' element={Courses}/>
            <Route path='/AboutUS' element={AboutUS}/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default LayoutRoutes
