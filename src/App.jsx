import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import ScrollToHashElement from './ScrollToHashElement';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'
import About from './pages/About'
import References from './pages/References'
import Team from './pages/Team'
import Demo from './pages/Demo'
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <ScrollToHashElement />
      <Navbar />
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/demo" element={<Demo />}/>
          <Route path="/references" element={<References />}/>
          <Route path="/team" element={<Team />}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
