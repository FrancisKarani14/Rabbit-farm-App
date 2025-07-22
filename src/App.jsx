import { useState } from 'react'
import React from 'react' 
import Home from './pages/Home'
import AnimalList from './pages/AnimalList'
import RabbitForm from './pages/RabbitForm'

import './App.css'

function App() {

  // state variable abstraction
  const [formData, setFormData]= useState({
    name:'',
    gender:'',
    served:'',
    dateServed:'',
    probableDateOfBirth:''
  })
  
  return (
    <>
      <Home />

      <AnimalList />
      <RabbitForm />
      
      
    </>
  )
}

export default App
