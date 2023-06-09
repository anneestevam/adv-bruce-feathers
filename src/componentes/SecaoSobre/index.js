import React from "react";
import './style.css';

export default function SecaoSobre() {
    return (
        <section id="sobre" className="secao-sobre">
            <div className="limitar-secao">
                <h3>Quem Sou?</h3>
                    <div className="container-sobre">

                        <div className="sobre-bruce">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis quis tortor id feugiat. Ut in ipsum at lectus sollicitudin consequat. Aenean eget scelerisque turpis, vel ultrices sapien. Pellentesque at massa id nisl suscipit suscipit pellentesque id erat. Vivamus eget sem fermentum justo luctus aliquet in eu elit. Vestibulum venenatis sollicitudin libero sit amet iaculis. Morbi a cursus sem.</p>

                            <p>Pellentesque at massa id nisl suscipit suscipit pellentesque id erat. Vivamus eget sem fermentum justo luctus aliquet in eu elit. Vestibulum venenatis sollicitudin libero sit amet iaculis. Morbi a cursus sem. Aliquam placerat libero ac ultricies faucibus. Pellentesque iaculis quis odio a ultricies. Nunc in nibh tincidunt, gravida arcu quis, fringilla metus. Cras quis turpis nunc.</p>

                            <p>Duis aliquam tellus sit amet magna feugiat ultricies. Proin dui eros, scelerisque ut ullamcorper et, lacinia non quam. In elementum vulputate purus, non scelerisque lorem malesuada id. Pellentesque pulvinar augue pellentesque justo lobortis fringilla. Integer vel urna at orci ultricies ultricies. Morbi scelerisque odio in odio sollicitudin, quis mattis lorem vestibulum. Integer dictum neque est, nec lacinia lectus lobortis non.</p>
                        </div>
                        
                        <div className="foto-bruce">
                            <img src="assets/bruce.jpg" alt="Foto Bruce" />
                        </div>

                    </div>
            </div>
        </section>
    )
}