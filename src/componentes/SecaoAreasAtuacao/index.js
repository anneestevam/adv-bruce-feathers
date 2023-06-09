import React from "react";
import './style.css';

export default function SecaoAreasAtuacao() {
    return (
        <section id="atuacao" className="secao-areas-atuacao">
            <div className="limitar-secao">
                <h3>Áreas de Atuação</h3>
                <p>Especializado no atendimento a pessoas físicas e jurídicas, com foco em Direito do Consumidor, Direito Trabalhista e Direito Empresarial.</p>

                <div className="container-areas">
                    <div className="box-area">
                        <img src="assets/icone-justica.png"/>
                        <h4>Direito do Consumidor</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis quis tortor id feugiat. Ut in ipsum at lectus sollicitudin consequat. Aenean eget scelerisque turpis, vel ultrices sapien. Pellentesque at massa id nisl suscipit suscipit pellentesque id erat. Vivamus eget sem fermentum justo luctus aliquet in eu elit. Vestibulum venenatis sollicitudin libero sit amet iaculis. Morbi a cursus sem.</p>
                    </div>
                    <div className="box-area">
                        <img src="assets/icone-justica.png"/>
                        <h4>Direito Trabalhista</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis quis tortor id feugiat. Ut in ipsum at lectus sollicitudin consequat. Aenean eget scelerisque turpis, vel ultrices sapien. Pellentesque at massa id nisl suscipit suscipit pellentesque id erat. Vivamus eget sem fermentum justo luctus aliquet in eu elit. Vestibulum venenatis sollicitudin libero sit amet iaculis. Morbi a cursus sem.</p>
                    </div>
                    <div className="box-area">
                        <img src="assets/icone-justica.png"/>
                        <h4>Direito Empresarial</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis quis tortor id feugiat. Ut in ipsum at lectus sollicitudin consequat. Aenean eget scelerisque turpis, vel ultrices sapien. Pellentesque at massa id nisl suscipit suscipit pellentesque id erat. Vivamus eget sem fermentum justo luctus aliquet in eu elit. Vestibulum venenatis sollicitudin libero sit amet iaculis. Morbi a cursus sem.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}