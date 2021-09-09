import React from "react";
import style from "./carnico.module.css";
import { ShoppingCart } from "../button/ShoppingCart";

export const Cardcarnico = ({ carnico }) => {
    return (
        <div className={style.products}>
            <div className={style.container}>
                <p> {carnico.name} </p>
                <p> {carnico.prices} </p>
                <p> {carnico.flavor} </p>
                <img src={carnico.image} alt="logo" className={style.lacteos} />
                <ShoppingCart />
            </div>
        </div>
    );
};
