import React from "react";
import "./App.css";

import Topo from './componentes/Topo';
import SecaoCapa from "./componentes/SecaoCapa";
import SecaoSobre from "./componentes/SecaoSobre";

export default function App () {
    return (
        <div>
            <Topo />
            <SecaoCapa />
            <SecaoSobre />
        </div>
    )
}