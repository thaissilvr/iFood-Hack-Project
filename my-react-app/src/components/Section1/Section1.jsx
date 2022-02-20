import React from 'react'
import './Section1.css'
import mercado from './Mercado.png'
import marmita from './Marmitas.png'
import lanche from './Lanches.png'
import promo from './Promo.png'
import cafeteria from './Cafeterias.png'

export default function Section1() {
    return (
        <section className='sectionInfo'>
            <div>
                <img src={mercado} />
                <p className="legend">Mercado</p>
            </div>
            <div>
                <img src={marmita} />
                <p className="legend">Marmita</p>
            </div>
            <div>
                <img src={lanche} />
                <p className="legend">Lanches</p>
            </div>

            <div>
                <img src={cafeteria} />
                <p className="legend">Cafeteria</p>
            </div>

            <div>
                <img src={promo} />
                <p className="legend">Promoções</p>
            </div>
        </section>
    )
}