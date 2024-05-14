
import './App.css';
import React from 'react';
import Home from './components/pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './components/pages/contato/contato';
import Fotos from './components/pages/fotos.js/fotos';
import Comentários from './components/pages/comentários/comentários';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contato' element={<Contato />}/>
      <Route path='/fotos' element={<Fotos />}/>
      <Route path='/Comentários' element={<Comentários />}/>


    </Routes>
    </BrowserRouter>
  );
}

export default App;
