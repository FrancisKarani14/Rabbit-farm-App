import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function RabbitForm({formData, handleChange}) {
  return (
    <section className='formPage'>
      <Navbar />
    <div className='formDisplay' >
      
    <h1>Add a Rabbit</h1>
    <form> 
        <label> Rabbit name </label>
        <input 
        id=''
        type='text'
        name='name'
        placeholder='Enter Rabbit name'
        value={formData.name}
        required
        onChange={handleChange}
        
        />
        

        <label>Enter the Gender 

        <select id='' 
        name='gender'
        value={formData.gender}
        onChange={handleChange}
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
        onChange={handleChange}
        />
        </label>
       
        <label>Date served</label>
        <input
        type='date'
        name='dateServed'
        value={formData.dateServed}
        onChange={handleChange}

        />
        
        
        <label>probable Date of birth</label>
        <input
        type='date'
        name='probableDateOfBirth'
        onChange={handleChange}
        value={formData.probableDateOfBirth}
       

        />
        
        
        <button type='submit'>Add Rabbit</button>
    </form>
      
    </div>
    <section className='footer'>
    <Footer />
    </section>
    </section>
  )
}
