import React from "react";
import data from "../../data";
import { Cardotros } from "./Cardotros";

export const Otros = () => {
    console.log(data);
    const otros = data.filter((otros) => otros.category === "otros");
    return (
        <div>
            {/* <p>Otros</p> */}
            {otros.map((otro, index) => (
                <Cardotros key={index} otro={otro} />
            ))}
        </div>
    );
};
