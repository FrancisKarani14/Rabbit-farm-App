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
        // onChange={c}
        
        />

        <label>Enter the Gender</label>
        <select id='' 
        // value={gender}
        // onChange={c}
        >
            <option>Male</option>
            <option>female</option>
        </select>

        <label>Tick if the rabbit is served</label>
        <input 
        type='checkbox'
        // checked={checked}
        // onChange={c}
        />
        <label>Date served</label>
        <input
        type='date'
        // value={n}

        />
        <label>probable Date of birth</label>
        <input
        type='date'
        // value={n}

        />
        <button type='submit'>Add Rabbit</button>
    </form>
      
    </div>
  )
}
