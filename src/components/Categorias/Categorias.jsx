import React from "react";
import logolacteos from "../../img/Categorias/logoyogurt.png";
import logochorizo from "../../img/Categorias/chorizofinal.png";
import logogalletas from "../../img/Categorias/galletas.png";
import style from "./categorias.module.css";
/* import { Lacteos } from "../Lacteos/Lacteos"; */
import { Link } from "react-router-dom";
/* import { Footer } from "../footer/Footer"; */

function Categorias() {
    return (
        <>
            <h1>hola</h1>

            <Link to="/lacteos">
                <img src={logolacteos} alt="logo" className={style.icon} />
                <p className={style.name}>Lacteos</p>
            </Link>

            <img src={logochorizo} alt="logo" className={style.icon} />
            <p className={style.name}>Carnicoss</p>

            <img src={logogalletas} alt="logo" className={style.icon} />
            <p className={style.name}>Galletas</p>

            <h2>Lacteos</h2>
        </>
    );
}

export default Categorias;
