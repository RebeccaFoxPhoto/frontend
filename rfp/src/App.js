import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Components/Home';
import About from './Components/About';
import AutoService from './Components/AutoService';
import EventService from './Components/EventService';
import PetService from './Components/PetService';
import Services from './Components/Services';
import Shop from './Components/Shop';
import NavBar from './Components/NavBar';

function App() {
  return (
    <>
    <header>
      <NavBar/>
    </header>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='services' element={<Services />} />
      <Route path='shop' element={<Shop />} />
    </Routes>
    </>
  );
}

export default App;
