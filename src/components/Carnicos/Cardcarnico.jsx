import React from "react";
import style from "./carnico.module.css";
import { ShoppingCart } from "../button/ShoppingCart";
/* import { Footer } from "../footer/Footer"; */
/* import { Link } from "react-router-dom";
import car from "../../img/buy/iconBuy.png"; */

export const Cardcarnico = ({ carnico }) => {
    return (
        <div className={style.products}>
            <div className={style.container}>
                <p> {carnico.name} </p>
                <p> ${carnico.prices} </p>
                <p> {carnico.flavor} </p>
                <p>{carnico.amount[carnico.id]}</p>
                <img src={carnico.image} alt="logo" className={style.lacteos} />
                <p>
                    <ShoppingCart />
                </p>

                {/* <div
                    className="button button-left"
                    onClick={carnico.decrease}
                    data-product={carnico.id}
                >
                    <div className="circle" data-product={carnico.id}>
                        -
                    </div>
                </div>
                <div
                    className="button button-right"
                    onClick={carnico.increase}
                    data-product={carnico.id}
                >
                    <div className="circle" data-product={carnico.id}>
                        +
                    </div>
                </div> */}

                <button>Añadir a carrito</button>
            </div>

            <div>
                {/* <Link to="/order" className="to-shopping-cart">
                    <img src={car} alt="logo" className={style.icon} />
                    <p className="quantity">{carnico.totalAmount}</p>
                </Link> */}
                {/*  <Footer /> */}
            </div>
        </div>
    );
};
