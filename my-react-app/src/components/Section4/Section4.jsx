import React from 'react'
import gendai from './GENDAI.png'
import habibs from './HABIBS.png'
import './Section4.css'


export default function Section4() {
    return (
        <section>

            <div className='title'>
            <h3>Lojas</h3>
            </div>
 
            <div className='restaurants'>
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