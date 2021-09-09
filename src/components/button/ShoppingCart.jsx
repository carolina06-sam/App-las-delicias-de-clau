import React, { useState } from "react";
import style from "./shopping.module.css";

export const ShoppingCart = () => {
    const [Contador, setContador] = useState(0);

    const suma = () => {
        setContador(Contador + 1);
        console.log(Contador);
    };
    const resta = () => {
        setContador(Contador - 1);
        if (Contador === 0) {
            setContador(0);
        }
    };

    return (
        <div>
            <div className={style.contador}>
                <button onClick={resta} className={style.button}>
                    -
                </button>
                <h1>{Contador} </h1>
                <button onClick={suma} className={style.button}>
                    +
                </button>
            </div>
        </div>
    );
};
