import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function RabbitForm({formData, handleChange, handleSubmit}) {
  return (
    <section className='formPage'>
      <Navbar />
    <div className='formDisplay' >
      
    <h1>Add a Rabbit</h1>
    <form onSubmit={handleSubmit} > 
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
        <label>Add image url</label>
        <input 
        type="text"
        name='image'
        value={formData.image}
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
        name='served'
        checked={formData.served}
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
        name='probableBirthDate'
        onChange={handleChange}
        value={formData.probableBirthDate}
       

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
