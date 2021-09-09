import React from "react";
import logolacteos from "../../img/Categorias/logoyogurt.png";
import logochorizo from "../../img/Categorias/chorizofinal.png";
import logogalletas from "../../img/Categorias/galletas.png";
import style from "./categorias.module.css";

export const Categorias = () => {
    return (
        <nav>
            <ul className={style.list}>
                <li>
                    <img src={logolacteos} alt="logo" className={style.icon} />
                    <p className={style.name}>Lacteos</p>
                </li>
                <li>
                    <img src={logochorizo} alt="logo" className={style.icon} />
                    <p className={style.name}>Carnicoss</p>
                </li>
                <li>
                    <img src={logogalletas} alt="logo" className={style.icon} />
                    <p className={style.name}>Galletas</p>
                </li>
            </ul>
        </nav>
    );
};
