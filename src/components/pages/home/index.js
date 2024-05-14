import React, { lazy, Suspense, useState } from 'react'
import Header from '../../header/header';
import './styles.css';
import Video from '../../../assets/videobt.mp4'
import Cards from '../../cards';
import Footer from '../../footer/footer';



function Home(){

    return (
        <>
        <Header/>
        <div id='banner'></div>
        <div id='trailer-container'>
            <div className='content'>
                <video controls className='trailer'>
                    <source src={Video} />
                    Seu navegador não possui suporte para vídeos
                </video>

                <div id='sinopse'>
                    <p className='description'>
                    Segue a história de Batman em seu segundo ano de luta contra o crime em busca de vingança, quando descobre a corrupção em Gotham City enquanto persegue o Charada/Enigma (Dano), um assassino em série que tem como alvo a elite de Gotham.

                    </p>
                    <button className='button'>Comprar ingresso</button>
                    </div> 
            </div>
        </div>
        <Cards />

        <Footer/>

        </>
            )
}

export default Home;