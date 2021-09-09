import React from "react";
import Logo from "../../img/Logo/LOGOFINAL.png";
import style from "./header.module.css";

export function Header() {
    return (
        <div className={style.Logo}>
            <img src={Logo} alt="logo" className={style.icon} />
        </div>
    );
}
