import React from "react";
import {cardsapi} from "../../cardsapi";
import {Card} from "../Card/Card";
import './CardList.css'

export const CardList = () => {
    const [isEmpty, setIsEmpty] = React.useState(false);

    React.useEffect(()=>{
       if(cardsapi.data.length === 0) {
           setIsEmpty(true);
       }
    }, [cardsapi.data.length]);

    return (
        <div className="card__list">
            {!isEmpty ? cardsapi.data.map((item) => {
                return (
                    <Card
                        key={item.id}
                        id={item.id}
                        lang={item.lang}
                        description={item.description}
                    />
                )
            })
            :
                <h1 className="error-message">У вас нет заданий</h1>
            }
        </div>
    )
}