import React from 'react'
import './Section1.css'

export default function Section1() {
    return (
        <section className='sectionInfo'>
            <div>
                <img src='./Mercado.png' />
                <p className="legend">Mercado</p>
            </div>
            <div>
                <img src='./Marmitas.png' />
                <p className="legend">Marmita</p>
            </div>
            <div>
                <img src='./Lanches.png' />
                <p className="legend">Lanches</p>
            </div>

            <div>
                <img src= './Cafeterias.png' />
                <p className="legend">Cafeteria</p>
            </div>

            <div>
                <img src='./Promo.png' />
                <p className="legend">Promoções</p>
            </div>
        </section>
    )
}