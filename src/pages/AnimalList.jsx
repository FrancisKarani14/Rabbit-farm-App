import React from 'react'
import AnimalCard from '../components/AnimalCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AnimalList({rabbits}) {
 return (
  <>
  <Navbar />
    <div className='listDisplay'>
      {rabbits.map((rabbit)=>(
        <AnimalCard key={rabbit.id} rabbit={rabbit} />
      ))}
      
    </div>
    <Footer />
    </>
  )
}
