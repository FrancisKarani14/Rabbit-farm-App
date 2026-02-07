import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimalCard from '../components/AnimalCard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AnimalList({rabbits, handleDelete, onUpdate}) {
  const [searchTerm, setSearchTerm] = useState('')
  const [genderFilter, setGenderFilter] = useState('all')
  const [servedFilter, setServedFilter] = useState('all')

  const filteredRabbits = rabbits.filter((rabbit) => {
    const matchesName = rabbit.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGender = genderFilter === 'all' || rabbit.gender.toLowerCase() === genderFilter.toLowerCase();
    const matchesServed = servedFilter === 'all' || 
      (servedFilter === 'served' && rabbit.served) || 
      (servedFilter === 'not-served' && !rabbit.served);
    
    return matchesName && matchesGender && matchesServed;
  });

  return (
    <div className="page-container">
      <Navbar />
      <div className="list-content">
        <div className="list-controls">
          <Link to="/rabbitform" className="add-rabbit-btn">+ Add New Rabbit</Link>
          
          <div className="filter-controls">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <select value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)} className="filter-select">
              <option value="all">All Genders</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <select value={servedFilter} onChange={(e) => setServedFilter(e.target.value)} className="filter-select">
              <option value="all">All Status</option>
              <option value="served">Served</option>
              <option value="not-served">Not Served</option>
            </select>
          </div>
        </div>

        <div className='listDisplay'>
          {filteredRabbits.map((rabbit) => (
            <AnimalCard key={rabbit.id} rabbit={rabbit} handleDelete={handleDelete} onUpdate={onUpdate} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
