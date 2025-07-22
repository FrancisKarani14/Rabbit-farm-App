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
    served:'false',
    dateServed:'',
    probableDateOfBirth:''
  })

  // function to handle change of the input fields

  function handleChange(e) {
    const {name, value, type, checked} = e.target;
    setFormData((prev)=>({
      ...prev,
      [name]:type==='checkbox'?checked:value
    }))
    
  }
  
  return (
    <>
      <Home />

      <AnimalList />
      <RabbitForm formData={formData} handleChange={handleChange} />
      
      
    </>
  )
}

export default App
