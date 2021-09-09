import React from "react";
import style from "./lacteos.module.css";
import { ShoppingCart } from "../button/ShoppingCart";

export const Cardlacteo = ({ lacteo }) => {
    console.log(lacteo.image);

    return (
        <div className={style.products}>
            <div className={style.container}>
                <p> {lacteo.name} </p>
                {/* <p>{lacteo.flavor.map((flav) => `[${flav}]`)}</p> */}
                <p> ${lacteo.prices} </p>
                <img src={lacteo.image} alt="logo" className={style.lacteos} />
                <ShoppingCart />
            </div>
        </div>
    );
};
