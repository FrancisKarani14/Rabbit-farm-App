import React from 'react'

export default function SearchBar({searchRabbit}) {

  return (
  <input  
  type='text'
  value={searchRabbit}
  name='searchRabbit'
  />
  )
}
