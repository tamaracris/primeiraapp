import React from 'react'
import './styles.css'
import Header from '../../header/header';
import Image1 from '../../Imagens/1c.webp';
import Image2 from '../../Imagens/2c.webp';
import Image3 from '../../Imagens/3c.webp';
import Image4 from '../../Imagens/4c.webp';
import Image5 from '../../Imagens/5c.webp';
import Image6 from '../../Imagens/6c.webp';
import Image7 from '../../Imagens/7c.webp';
import Image8 from '../../Imagens/8c.webp';
import Image9 from '../../Imagens/9c.webp';
import Footer from '../../footer/footer';

function Fotos(){
    return (
        <>
        <Header/>
        <div id='gallery'>

        <div className='image'>
        <img id='image' src={Image1} />
        </div> 

        <div className='image'> 
        <img id='image' src={Image2} />
        </div>

        <div className='image'> 
        <img id='image' src={Image3} />
        </div> 

        <div className='image'> 
        <img id='image' src={Image4} />
        </div> 

        <div className='image'> 
        <img id='image' src={Image5} />
        </div>

        <div className='image'>  
        <img id='image' src={Image6} />
        </div>
        <div className='image'>
        <img id='image' src={Image7} />
        </div>
        <div className='image'>
        <img id='image' src={Image8} />
        </div>
        <div className='image'>
        <img id='image' src={Image9} />
        </div>

        </div>

            
        <Footer/>
        </>
        )
}
export default Fotos;