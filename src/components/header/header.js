import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './styles.css'
import Logo from '../assets/logo.png';

function Header({ }){
    return (
        <header>
            <img id='logo' src={Logo} />
            <nav>
                <ul>
                    <Link style={{ textDecoration: 'none'}} to='/'><li>Home</li></Link>

                <Link style={{ textDecoration: 'none'}} to='/Contato'><li>Contato</li></Link>
                <Link style={{ textDecoration: 'none'}} to='/Contato'><li>Fotos</li></Link>
                <li>Comentários</li>

                </ul>
            </nav>
        </header>
    )
}


export default Header;