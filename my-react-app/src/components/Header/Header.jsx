import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import logo from './ifood-43.png'

export default function Header () {
    return (
        <header className='headerMain'>
            <ul>
                <img src={logo} width='50px' height='30px'/>
                <li className='nav'>Restaurante</li>
                <li className='nav'>Mercado</li>
                <li className='nav'>Bebidas</li>
                <li className='nav'>Farmácia</li>
                <li className='nav'>Express</li>
                <li className='nav'>Pets</li>


                <div>
                <input typeof='text' className='navSearch' placeholder='Busque aqui'/>
                <FontAwesomeIcon icon={faSearch} className='nav' />
                </div>

                <FontAwesomeIcon icon={faUser} className='nav' />
            </ul>

     
           

        </header>
    )
}