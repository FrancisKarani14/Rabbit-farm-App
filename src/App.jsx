
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AnimalList from './pages/AnimalList';
import RabbitForm from './pages/RabbitForm';
import './App.css';
import { useState } from 'react'

function App() {
   // state variable abstraction
  const [formData, setFormData]= useState({
    name:'',
    gender:'',
    served:'false',
    dateServed:'',
    probableDateOfBirth:''
  })

  // function to handle change of the input fields

  function handleChange(e) {
    const {name, value, type, checked} = e.target;
    setFormData((prev)=>({
      ...prev,
      [name]:type==='checkbox'?checked:value
    }))
    
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rabbits" element={<AnimalList />} />
        <Route path="/add" element={<RabbitForm formData={formData} handleChange={handleChange}/>} />
      </Routes>
    </Router>
  );
export default App;
