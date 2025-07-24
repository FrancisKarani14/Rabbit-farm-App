import React from 'react'
import { useState } from 'react'
import AnimalCard from '../components/AnimalCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'


export default function AnimalList({rabbits}) {
const [searchRabbit, setSearchRabbit]=useState('')

const filteredItems = rabbits.fi


 return (
  <>
  <Navbar />
  <SearchBar searchRabbit={searchRabbit} />
    <div className='listDisplay'>
      {rabbits.map((rabbit)=>(
        <AnimalCard key={rabbit.id} rabbit={rabbit} />
      ))}
      
    </div>
    <Footer />
    </>
  )
}
