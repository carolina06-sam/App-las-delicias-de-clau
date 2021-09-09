import React from "react";
import style from "./otros.module.css";
import { ShoppingCart } from "../button/ShoppingCart";

export const Cardotros = ({ otro }) => {
    return (
        <div className={style.products}>
            <div className={style.container}>
                <p> {otro.name} </p>
                <p> ${otro.prices} </p>
                <p> {otro.flavor} </p>
                <img src={otro.image} alt="logo" className={style.lacteos} />
                <ShoppingCart />
            </div>
        </div>
    );
};
