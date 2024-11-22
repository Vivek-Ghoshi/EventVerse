import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Header from './components/Header'

import Home from './pages/Home'
import EventDetails from './pages/EventDetails'
import CreateEvent from './pages/CreateEvent'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <>
    
     
         <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/event/:id' element={<EventDetails/>}/>
          <Route path='/create-event' element={<CreateEvent/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/' element={<Register/>} />
         </Routes>
     
    </>
  )
}

export default App
