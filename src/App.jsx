

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import AnimalList from './pages/AnimalList';
import RabbitForm from './pages/RabbitForm';
import './App.css';
import { useState, useEffect } from 'react'


function App() {

  //variable to save the server base url
  const url = " http://localhost:3000/rabbits" 

   // state variable abstraction
  const [formData, setFormData]= useState({
    name:'',
    gender:'',
    served:'false',
    dateServed:'',
    probableDateOfBirth:''
  })
  // a state variable for the animals, to record the changes in the number and the details
  const[rabbits, setRabbits] = useState([])

  // useeffect to fetch the animal lists as the page renders,
  
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>setRabbits(data))
    .catch(err => console.error("Fetch Error:", err));

    
    
  },[])

  // function to handle change of the input fields

  function handleChange(e) {
    const {name, value, type, checked} = e.target;
    setFormData((prev)=>({
      ...prev,
      [name]:type==='checkbox'?checked:value
    }))
    
  }
  return (

    <>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rabbits" element={<AnimalList />} />
        {/*  */}
        <Route 
          path="/rabbitform" 
          element={<RabbitForm formData={formData} handleChange={handleChange}/>}/>
     </Routes>
    </Router>
    </>
  )};
export default App;
      

          
     

