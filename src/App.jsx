import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AnimalList from './pages/AnimalList';
import RabbitForm from './pages/RabbitForm';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rabbits" element={<AnimalList />} />
        <Route path="/add" element={<RabbitForm />} />
      </Routes>
    </Router>
  );
}

export default App;
