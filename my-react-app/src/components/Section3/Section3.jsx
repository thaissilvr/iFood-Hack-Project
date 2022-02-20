import React from 'react'
import gendai from './GENDAI.png'
import habibs from './HABIBS.png'
import './Section3.css'



export default function Section3() {
    return (
        <section>

            <div className='title'>
            <h3 >Últimas lojas</h3>
            <h6>Ver mais</h6>
            </div>
 
            <div className='sectionLatest'>
                <div>
                    <img src={gendai} />
                    <p>Gendai</p>
                </div>
                <div>
                    <img src={habibs} />
                    <p>Habib's</p>
                </div>
            </div>

        </section>
    )
}