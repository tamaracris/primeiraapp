import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Button from './components/button/button';
import Header from './components/header/header';

function App() {

  const [carregando, setCarregando] = useState(true)
  const [contador, setContador] = useState(0)



  return (
  <div >
    {carregando ? <span>Carregando...</span> : 

    <div>
         <button onClick={() => setContador(contador + 1)} >Adicionar</button> 
         <span>{contador}</span>

    </div>
  }
 
    <button onClick={() => setCarregando(!carregando)}>{carregando ? 'Carregar site' : 'Voltar para carregamento'}</button>
    <Button name='Alterar valor' active onClick={setContador} />
  </div>
  );
}

export default App;
