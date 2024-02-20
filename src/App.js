import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Timer from './components/Timer';
import About from './components/About';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Timer' element={<Timer />} />
          <Route path='/About' element={<About />} />
          <Route path="/cart" element={<Cart />} />

        </Routes>
      </BrowserRouter></>
  );
}

export default App;
