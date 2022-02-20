import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

export default function Header() {
    return (
        <header className='headerMain'>
            <ul>
                <div>
                    <img src="ifood-43.png" className='.logo' width={'50px'} height={'30px'} />
                </div>
                <li className='nav'>Restaurante</li>
                <li className='nav'>Mercado</li>
                <li className='nav'>Bebidas</li>
                <li className='nav'>Farmácia</li>
                <li className='nav'>Express</li>
                <div>
                    <input typeof='text' className='navSearch' placeholder='Busque aqui' />
                    <FontAwesomeIcon icon={faSearch} className='nav' />
                </div>
                <FontAwesomeIcon icon={faUser} className='nav' />
            </ul>
        </header>
    )
}