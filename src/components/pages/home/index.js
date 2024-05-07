import React from 'react'
import Profile from '../../profile/profile';
import Header from '../../header/header';

function Home(){
    const produtos = [
        {nome: 'Batedeira', id: 20},
        {nome: 'Ventilador', id: 22},
        {nome: 'Computador', id: 30},
    ]



    return (
        <div>
            {produtos.map((produto) => (
                <span style={{ display: 'block' }}>{produto.nome}</span>
            ))}
            
        </div>
    )
}
export default Home;