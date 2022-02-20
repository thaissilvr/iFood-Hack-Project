import React from 'react';
import './Footer.css'

export default function Footer() {
    return (
        <footer className='footerMain'>
            <hr />

            <div>
                <h3>iFood</h3>
                <li className='footerItems'>Site Institucional</li>
                <li className='footerItems'>Fale conosco</li>
                <li className='footerItems'>Carreira</li>
                <li className='footerItems'>iFood Colômbia</li>
            </div>

            <div>
                <h3>Descubra</h3>
                <li className='footerItems'>Cadastre seu Restante ou Mercado</li>
                <li className='footerItems'>iFood Shop</li>
                <li className='footerItems'>iFood Card</li>
                <li className='footerItems'>Blog iFood Empresas</li>
            </div>

            <div>
                <h3>Social</h3>
                <li className='footerItems'>Facebook</li>
                <li className='footerItems'>Twitter</li>
                <li className='footerItems'>Youtube</li>
                <li className='footerItems'>Instagram</li>
            </div>
        </footer>

    )
}