
import './App.css';
import React from 'react';
import Home from './components/pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './components/pages/contato/contato';
import Fotos from './components/pages/fotos.js/fotos';
import Detalhes from './components/pages/detalhes/detalhes';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contato' element={<Contato />}/>
      <Route path='/fotos' element={<Fotos />}/>
      <Route path='/detalhes/:id' element={<Detalhes />}/>
      

    </Routes>
    </BrowserRouter>
  );
}

export default App;
