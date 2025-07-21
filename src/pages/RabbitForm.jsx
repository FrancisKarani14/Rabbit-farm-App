import React from 'react'


export default function RabbitForm() {
  return (
    <div className='formDisplay' >
    <h1>Home</h1>
    <form> 
        <label> Rabbit name </label>
        <input 
        id=''
        type='text'
        name=''
        placeholder='Enter Rabbit name'
        // value={name}
        required
        
        />

        <label>Enter the Gender</label>
        <select id='' 
        // value={gender}
        >
            <option>Male</option>
            <option>female</option>
        </select>
    </form>
      
    </div>
  )
}
