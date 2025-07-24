import React from 'react'
import AnimalCard from '../components/AnimalCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



export default function AnimalList({rabbits , handleDelete}) {
 return (
  <>
  <Navbar />
  {rabbits.map((rabbit)=>
  <AnimalCard key={rabbit.id} rabbit={rabbit} handleDelete={handleDelete}  onUpdate={onUpdate} />

  )}
   <Footer />


    
   
