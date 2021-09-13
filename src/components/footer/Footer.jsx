import React from "react";
import car from "../../img/buy/iconBuy.png";
import { Link } from "react-router-dom";
import { Add } from "../add/Add";

export const Footer = (carnico) => {
    return (
        <div>
            {/* <img src={car} alt="logo" /> */}
            <Link to="/add">
                {Add}
                <img src={car} alt="logo" /* className={style.icon} */ />
                <p className="quantity">{carnico.totalAmount}</p>
            </Link>
        </div>
    );
};
