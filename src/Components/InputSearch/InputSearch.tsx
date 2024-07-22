import React from "react";
import { Button } from "../Button/Button";
import "./InputSearch.css"

export const InputSearch = () => {
    return (
        <div className="header__search">
            <input className="header__search-input" type="text" />
            <Button className="header__search-button">Поиск</Button>
        </div>
    )
}