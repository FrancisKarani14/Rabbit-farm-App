import React from 'react'

export default function AnimalCard({rabbit, handleDelete}) {
  return (
    <div className='animalCard'>
        <h2>{rabbit.name} </h2>
        <img 
        src={rabbit.image} 
        alt={rabbit.name}

        />
        <p><strong>Gender:</strong> {rabbit.gender} </p>
         <p><strong>Is the rabbit served:</strong> {rabbit.served} </p>
          <p><strong>Date when the rabbit was served:</strong> {rabbit.dateServed} </p>
           <p><strong>Probable date of birth:</strong> {rabbit.probableBirthDate} </p>
          <button onClick={() => handleDelete(rabbit.id)}>remove rabbit</button>

           <button className='updateBtn'>update Rabbit</button>

      
    </div>
  )
}
