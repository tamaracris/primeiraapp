import React, { useContext, useEffect } from 'react'
import './styles.css'
import { UserContext } from '../../contexts/userContext';
import { Link, useNavigate } from 'react-router-dom';

function Header(){
    const {login, setLogin} = useContext(UserContext);
    const navigate = useNavigate();

    const active = false; 

    return (
        <div>
            <nav>
                <ul>
                    <Link to='/'><li>Home</li></Link>

                <Link to='/fotos'><li>Fotos</li></Link>
                <Link to='/Contato'><li>Contato</li></Link>
                <li onClick={() => navigate('contato')}>Login</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;