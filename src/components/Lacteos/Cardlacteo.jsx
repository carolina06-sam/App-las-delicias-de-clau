import React from "react";
import style from "./lacteos.module.css";
import { ShoppingCart } from "../button/ShoppingCart";

export const Cardlacteo = ({ lacteo }) => {
    console.log(lacteo.image);
    const { product, onAdd } = lacteo;

    return (
        <div className={style.products}>
            <div className={style.container}>
                <p> {lacteo.name} </p>
                <p> ${lacteo.prices} </p>
                <img src={lacteo.image} alt="logo" className={style.lacteos} />
                <p>
                    <ShoppingCart />
                </p>
                <button>Añadir a carrito</button>
                <div>
                    <button onClick={() => onAdd(product)}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};
