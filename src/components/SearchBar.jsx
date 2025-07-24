import React from 'react'

export default function SearchBar({searchRabbit, onChange}) {

  return (
  <input  
  type='text'
  value={searchRabbit}
  name='searchRabbit'
  onChange={(e) => onChange(e.target.value)}
  placeholder='Search' 
  style={{
     borderRadius: '1rem',
    padding:"1px"
  }
    

  }
  />
  )
}
