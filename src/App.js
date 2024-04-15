import './App.css';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import NavBar from './components/NavBar';
import Home from './components/Home/Home';
import Rentals from './components/Rentals/Rentals';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App text-light">
      <ScrollToTop />
      <NavBar />
    <div className=''>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path='/rentalmanagement' element={<Rentals/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
      <Footer />
    </div>
  );
}

export default App;
