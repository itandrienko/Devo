import React from "react";
import { Button } from "../Button/Button";
import "./UserContainer.css"

export const UserContainer = () => {
    return (
        <div className="header__user">
            <Button className="header__user-button">Пользователь</Button>
        </div>
    )
}