import React from "react";
import {LayoutHeader} from "../../Layouts/LayoutHeader";
import {InputSearch} from "../../InputSearch/InputSearch";
import {UserContainer} from "../../UserContainer/UserContainer";
import {LayoutMain} from "../../Layouts/LayoutMain";
import {CardList} from "../../CardList/CardList";

export const MainPage = () => {
    return (
        <>
            <LayoutHeader>
                <InputSearch/>
                <UserContainer/>
            </LayoutHeader>
            <LayoutMain>
                <CardList/>
            </LayoutMain>
        </>
    )
}