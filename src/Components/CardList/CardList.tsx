import React from "react";
import {cardsapi} from "../../cardsapi";
import {Card} from "../Card/Card";



export const CardList = ({}) => {
    return (
        <div className="card__list">
            {cardsapi.data.map((item) => {
                return (
                    <Card
                        key={item.id}
                        id={item.id}
                        lang={item.lang}
                        description={item.description}
                    />
                )
            })}
        </div>
    )
}