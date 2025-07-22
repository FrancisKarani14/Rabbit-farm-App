import React from 'react'


export default function RabbitForm({formData}) {
  return (
    <div className='formDisplay' >
    <h1>Add Rabbit</h1>
    <form> 
        <label> Rabbit name </label>
        <input 
        id=''
        type='text'
        name='name'
        placeholder='Enter Rabbit name'
        value={formData.name}
        required
        // onChange={c}
        
        />
        

        <label>Enter the Gender 

        <select id='' 
        name='gender'
        value={formData.gender}
        // onChange={c}
        >
            <option>Male</option>
            <option>female</option>
        </select>
        </label>

        <label>Tick if the rabbit is served 

        <input 
        type='checkbox'
        name='checkbox'
        checked={formData.checked}
        // onChange={c}
        />
        </label>
        <label>Date served</label>
        <input
        type='date'
        value={formData.dateServed}

        />
        
        <label>probable Date of birth</label>
        <input
        type='date'
        value={formData.probableDateOfBirth}

        />
        
        <button type='submit'>Add Rabbit</button>
    </form>
      
    </div>
  )
}
