import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <div className="App container-lg text-light border">
      <NavBar />
      <Routes>
         <Route exact path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
