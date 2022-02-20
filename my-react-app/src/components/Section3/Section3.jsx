import React from 'react'
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
                    <img src='./GENDAI.png' />
                    <p>Gendai</p>
                </div>
                <div>
                    <img src='./HABIBS.png' />
                    <p>Habib's</p>
                </div>
            </div>

        </section>
    )
}