
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AnimalList from './pages/AnimalList';
import RabbitForm from './pages/RabbitForm';
import './App.css';

import { useState, useEffect } from 'react'

import { useState } from 'react'
import Signup from './pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from './components/Footer.jsx';
import Login from "./pages/Loginpage";




function App() {

  //variable to save the server base url
  const url = "https://json-server-7-kr3u.onrender.com/rabbits" 

   // state variable abstraction
  const [formData, setFormData]= useState({
    name:'',
    image:'',
    gender:'',
    served:false,
    dateServed:'',
    probableBirthDate:''
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
  // function to handle submit
  function handleSubmit(e) {
    e.preventDefault()
    fetch(url,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(formData)
     })
      .then(res=>res.json())
      .then(newRabbit=>{
        setRabbits(prev=> [...prev, newRabbit])
      })
.catch((err) => console.error("Post Error:", err));
    
  }
  return (
         <>
    <Router>
 
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/animallist" element={<AnimalList rabbits={rabbits} />} />

        {/*  */}
        <Route 
          path="/rabbitform" 
          element={<RabbitForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />}/>
     </Routes>

        <Route path="/animallist" element={<AnimalList />} />
        <Route 
          path="/rabbitform" 
          element={<RabbitForm formData={formData} handleChange={handleChange}/>}
        />
        <Route path="/login" element={<Login />} />

      </Routes>
      <Footer />

    </Router>
    </>
  );
}

export default App;


   

 
          
     


