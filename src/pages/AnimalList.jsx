import React from 'react'
import { useState } from 'react'
import AnimalCard from '../components/AnimalCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'




export default function AnimalList({rabbits, handleDelete, onUpdate}) {
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
  <div className="fell">
  <Navbar />
    <div className='listDisplay'>
      {filteredRabbits.map((rabbit)=>(<AnimalCard key={rabbit.id} rabbit={rabbit} handleDelete={handleDelete}  onUpdate={onUpdate} />
      ))}
      
    </div>
    <Footer />
    </div>
    </>
  )
}





    

