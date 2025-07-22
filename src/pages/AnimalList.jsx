import React from 'react'
import AnimalCard from '../components/AnimalCard'

export default function AnimalList({rabbits}) {
 return (
    <div>
      <AnimalCard rabbits={rabbits} />
    </div>
  )
}
