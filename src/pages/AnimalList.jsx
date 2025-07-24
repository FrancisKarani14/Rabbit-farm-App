import React from 'react'
import { useState } from 'react'
import AnimalCard from '../components/AnimalCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'



export default function AnimalList({rabbits}) {
const [searchRabbit, setSearchRabbit]=useState('')

const filteredRabbits = rabbits.filter((rabbit) => {
  const term = searchRabbit.toLowerCase();

  const nameMatch = rabbit.name.toLowerCase().includes(term);
  const genderMatch = rabbit.gender.toLowerCase().includes(term);
  const servedMatch = rabbit.served.toString().toLowerCase().includes(term); 

  return nameMatch || genderMatch || servedMatch;
});



 return (
  <>
  <Navbar />
  <SearchBar searchRabbit={searchRabbit} onChange={setSearchRabbit} />
    <div className='listDisplay'>
      {filteredRabbits.map((rabbit)=>(<AnimalCard key={rabbit.id} rabbit={rabbit} handleDelete={handleDelete}  onUpdate={onUpdate} />>
      ))}
      
    </div>
    <Footer />
    </>
  )
}





    
   

