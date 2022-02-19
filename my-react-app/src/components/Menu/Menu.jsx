import React from 'react';
import './Menu.css'


export default function Menu () {
    return (
        <section className='menuNav'>
            <ul>
                <li><button>Ordenar</button></li>
                <li><button>Pra retirar</button></li>
                <li><button>Entrega grátis</button></li>
                <li><button>Vale refeição</button></li>
                <li><button>Entrega parceira</button></li>
                <li><button>Limpar</button></li>
            </ul>
        </section>
    )
}