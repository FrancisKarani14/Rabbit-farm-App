import React from 'react'
import AnimalCard from '../components/AnimalCard'

export default function AnimalList({rabbits}) {
 return (
    <div>
      {rabbits.map((rabbit)=>(
        <AnimalCard key={rabbit.id} rabbit={rabbit} />
      ))}
    </div>
  )
}
