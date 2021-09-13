import React from "react";
import data from "../../data";
import { Cardcarnico } from "./Cardcarnico";
import style from "./carnico.module.css";

export const Carnicos = () => {
    console.log(data);
    const carnicos = data.filter(
        (carnicos) => carnicos.category === "carnicos"
    );
    return (
        <div className={style.text}>
            {/* <p>Carnico</p> */}
            {carnicos.map((carnico, index) => (
                <Cardcarnico key={index} carnico={carnico} />
            ))}
        </div>
    );
};
