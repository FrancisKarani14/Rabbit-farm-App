
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AnimalList from './pages/AnimalList';
import RabbitForm from './pages/RabbitForm';
import './App.css';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from './components/Footer.jsx';
import Login from "./pages/Loginpage";
import Signup from './pages/Signup.jsx';




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
         <>
    <Router>
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animallist" element={<AnimalList />} />
        <Route 
          path="/rabbitform" 
          element={<RabbitForm formData={formData} handleChange={handleChange}/>}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    
    </Router>
    </>
  );
}

export default App;


   

 
          
     


