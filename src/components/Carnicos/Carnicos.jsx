import React from "react";
import data from "../../data";
import { Cardcarnico } from "./Cardcarnico";

export const Carnicos = () => {
    console.log(data);
    const carnicos = data.filter(
        (carnicos) => carnicos.category === "carnicos"
    );
    return (
        <div>
            <p>Carnico</p>
            {carnicos.map((carnico, index) => (
                <Cardcarnico key={index} carnico={carnico} />
            ))}
        </div>
    );
};
