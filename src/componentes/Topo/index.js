import React from "react";
import './style.css';

export default function Topo() {
    return (
        <header>
            <div className="limitar-secao">
                <img src='assets/logo.png' alt='Logo Bruce Feathers'/>

                <nav>
                <a href="#sobre">Sobre</a>
                <a href="#atuacao">Áreas de atuação</a>
                <a href="#contato">Contato</a>
                </nav>
            </div>
        </header>
    )
}