import React, { Component } from "react";
import Menu from '../Layout/Menu';
import Footer from "../Layout/Footer";

class Preguntas extends Component{
    render() {
        return(
            <div className="estiloPagina">
                <Menu />
                <div className="container-fluid text-center">
                    <p className="marcasEstilo">Sección Preguntas</p>
                    <div className="text-center padreLineaAzul">
                        <div className="lineaAzul"></div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Preguntas;