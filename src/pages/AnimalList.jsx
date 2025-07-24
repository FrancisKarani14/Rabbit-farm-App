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
    
            {rabbits.map((rabbit) => (
        <div key={rabbit.id} className="rabbit-card">
          <h3>{rabbit.name}</h3>
          <img src={rabbit.image} alt={rabbit.name} width={100} />
          <p>Gender: {rabbit.gender}</p>
          <button onClick={() => handleDelete(rabbit.id)}>Delete</button>
        </div>
      ))}

    </div>
    <Footer />
    </>
  )
}
