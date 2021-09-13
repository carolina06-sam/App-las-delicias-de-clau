import React, { createContext } from "react";

import { data } from "../../data";

const JBR = createContext();

function ShoppingCart(props) {
    const iddata = data.carnes
        .concat(data.desayunos)
        .concat(data.almuerzos)
        .concat(data.bebidas)
        .concat(data.all)
        .map((e) => (e = e.id));
    let initialStateCart = {};
    for (let i of iddata) {
        initialStateCart[i] = 0;
    }

    const [cart, setCart] = React.useState(initialStateCart);

    const increase = (e) => {
        setCart({
            ...cart,
            [e.target.dataset.product]: cart[e.target.dataset.product] + 1,
        });
    };

    const decrease = (e) => {
        if (cart[e.target.dataset.product] > 0) {
            setCart({
                ...cart,
                [e.target.dataset.product]: cart[e.target.dataset.product] - 1,
            });
        }
    };

    return (
        <JBR.Provider value={{ data, cart, increase, decrease }}>
            {props.children}
        </JBR.Provider>
    );
}

export { ShoppingCart, JBR };
