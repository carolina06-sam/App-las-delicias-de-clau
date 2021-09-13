import React from "react";
import data from "../../data";
import { Cardlacteo } from "./Cardlacteo";

export const Lacteos = () => {
    console.log(data);
    const lacteos = data.filter((lacteos) => lacteos.category === "lacteos");
    return (
        <div>
            {/* <p>Lacteos</p> */}
            {lacteos.map((lacteo, index) => (
                <Cardlacteo key={index} lacteo={lacteo} />
            ))}
        </div>
    );
};
