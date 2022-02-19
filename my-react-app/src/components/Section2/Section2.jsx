import React from 'react'
import './Section2.css'
import novidades from './novidades.png'
import cupom from './slidecupom.png'

export default function Section2() {
    return (
        <section className='sectionCard'>
            <div>
                <img src={cupom}/>
            </div>
            <div>
                <img src={novidades}/>
            </div>
    
        </section>
    )
}