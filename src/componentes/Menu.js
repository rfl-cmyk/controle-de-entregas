import React from 'react'
import { NavLink } from 'react-router-dom'

import './menu.css'

function Menu() {

    const efeitoDrop = (e) => {
        let elemento = document.getElementById(e);
        if(elemento.classList.contains('dropOff')) {
            elemento.classList.remove('dropOff')
            elemento.classList.add('dropOn')
        } else {
            elemento.classList.add('dropOff')
            elemento.classList.remove('dropOn')
        }
    }

    const escondeMenu = () => {
        let elemento = document.getElementById('leftMenu');
        if(elemento.classList.contains('esconde')) {
            elemento.classList.remove('esconde')
        } else {
            elemento.classList.add('esconde')
        }
    }

    return(
        <nav className="leftMenu" id="leftMenu">
          <p onClick={() => escondeMenu()}>&equiv;</p>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/motos">Motos</NavLink></li>
            <li><NavLink to="/motoqueiros">Motoqueiros</NavLink></li>

            <li className="dropOff" id="cadastro"><span onClick={() => efeitoDrop('cadastro')}>Cadastro</span>
              <ul className="drop">
                <li><NavLink to="/">- Motos</NavLink></li>
                <li><NavLink to="/">- Motoqueiros</NavLink></li>
              </ul>
            </li>

            <li className="dropOff" id="relatorios">
              <span onClick={() => efeitoDrop('relatorios')}>Relatórios</span>
              <ul className="drop">
                <li><NavLink to="/">- Entregas</NavLink>
                </li>
                <li><NavLink to="/">- Manutenção</NavLink></li>
                <li><NavLink to="/">- Consumo</NavLink></li>
              </ul>
            </li>
          </ul>
        </nav>
    )
}

export default Menu