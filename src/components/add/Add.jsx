import React from "react";
import style from "./add.module.css";

export const Add = () => {
    return (
        <div>
            <h1>Mensaje de orden</h1>
            <p>descripcion de la orden</p>
            <p>Total Compra</p>
            <button className={style.msn}>Confirmar orden</button>
        </div>
    );
};
