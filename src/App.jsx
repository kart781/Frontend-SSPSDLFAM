import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ScrollToHashElement from './ScrollToHashElement';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToHashElement />
      <Navbar />
      <Footer />
    </BrowserRouter>
  )
}

export default App
