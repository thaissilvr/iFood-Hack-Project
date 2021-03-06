import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
export default function Header({handleChange}) {

 
  return (
    <header className="headerMain">
      <ul>
        <img src="ifood-43.png" width="50px" height="30px" />
        <li className="nav">Restaurante</li>
        <li className="nav">Mercado</li>
        <li className="nav">Bebidas</li>
        <li className="nav">Farmácia</li>
        <li className="nav">Express</li>
        <li className="nav">Pets</li>
        <div>
          <input
            typeof="text"
            className="navSearch"
            placeholder="Busque aqui"
            onChange={handleChange}
          />
          <FontAwesomeIcon icon={faSearch} className="nav" />
        </div>

        <FontAwesomeIcon icon={faUser} className="nav" />
      </ul>
    </header>
  );
}
