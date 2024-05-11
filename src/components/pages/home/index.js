import React, { lazy, Suspense, useState } from 'react'
import Header from '../../header/header';
import './styles.css';
import Video from '../../assets/videobt.mp4'


function Home(){

    return (
        <>
        <Header/>
        <div id='banner'></div>
        <div id='trailer-container' >
            <div className='content' >
                <video controls className='trailer' >
                    <source src={Video} />

                </video>

            </div>

        </div>

        </>
            )
}

export default Home;