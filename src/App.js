import React from "react";
import "./App.css";

import Topo from './componentes/Topo';
import SecaoCapa from "./componentes/SecaoCapa";
import SecaoSobre from "./componentes/SecaoSobre";
import SecaoAreasAtuacao from "./componentes/SecaoAreasAtuacao";
import SecaoContato from "./componentes/SecaoContato";
import Rodape from "./componentes/Rodape";

export default function App () {
    return (
        <div>
            <Topo />
            <SecaoCapa />
            <SecaoSobre />
            <SecaoAreasAtuacao />
            <SecaoContato />
            <Rodape />
        </div>
    )
}