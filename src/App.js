import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Rentals from './components/Rentals/Rentals';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App text-light">
      <NavBar />
    <div className='container-lg'>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path='/rentals' element={<Rentals/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
