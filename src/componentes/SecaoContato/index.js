import React from "react";
import './style.css';

export default function SecaoContato() {
    return (
        <section id="contato" className="secao-contato">
            <div className="limitar-secao">
                <h3>Contatos Bruce Feathers</h3>
                <p>Atendimento de segunda a sexta das 08:00 às 18:00hs</p>

                <div className="container-contato">
                    <div className="contato-conteudo">
                        <h4>Atendimento online</h4>
                        <div>
                            <img src="assets/whatsapp.png" alt="Ícone Whatsapp"/>
                            <span>(88) 99999-9999</span>
                        </div>
                        <div>
                            <img src="assets/email.png" alt="Ícone E-mail" />
                            <span>contato@brucefathers.com</span>
                        </div>
                    </div>

                    <div className="contato-conteudo">
                        <h4>Atendimento presencial</h4>
                        <div>
                            <img src="assets/endereco.png" />
                            <span>Senador Pompeu - CE</span>
                        </div>
                        <div>
                            <img src="assets/telefone.png" />
                            <span>(88) 99999-0000</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}