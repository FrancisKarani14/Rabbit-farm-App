import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AnimalList from './pages/AnimalList';
import { useState, useEffect } from 'react';
import RabbitForm from './pages/RabbitForm';
import './App.css';

import Signup from './pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Login from "./pages/Loginpage";
function App() {
  const url = "https://json-server-7-kr3u.onrender.com/rabbits";

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    gender: '',
    served: false,
    dateServed: '',
    probableBirthDate: ''
  });

  const [rabbits, setRabbits] = useState([]);

  useEffect(() => {
    console.log('Fetching rabbits from:', url);
    fetch(url)
      .then(res => {
        console.log('Response status:', res.status);
        return res.json();
      })
      .then(data => {
        console.log('Rabbits fetched:', data);
        setRabbits(data);
      })
      .catch(err => console.error("Fetch Error:", err));
  }, []);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(newRabbit => {
        setRabbits(prev => [...prev, newRabbit]);
        setFormData({
          name: '',
          image: '',
          gender: '',
          served: false,
          dateServed: '',
          probableBirthDate: ''
        });
      })
      .catch((err) => console.error("Post Error:", err));
  }

  function handleDelete(id) {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setRabbits(prev => prev.filter(rabbit => rabbit.id !== id));
      })
      .catch(err => console.error("Delete Error:", err));
  }

  const handleUpdate = (updatedRabbit) => {
    fetch(`${url}/${updatedRabbit.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRabbit),
    })
      .then(res => res.json())
      .then(newRabbit => {
        const updatedList = rabbits.map(rabbit =>
          rabbit.id === newRabbit.id ? newRabbit : rabbit
        );
        setRabbits(updatedList);
      });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/animallist" element={
          <AnimalList rabbits={rabbits} handleDelete={handleDelete} onUpdate={handleUpdate} />
        } />
        <Route path="/rabbitform" element={
          <RabbitForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}
export default App;