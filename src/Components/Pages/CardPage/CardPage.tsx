import React, {FC} from "react";
import {InputSearch} from "../../InputSearch/InputSearch";
import {UserContainer} from "../../UserContainer/UserContainer";
import {LayoutHeader} from "../../Layouts/LayoutHeader";
import {LayoutMain} from "../../Layouts/LayoutMain";
import {Button} from "../../Button/Button";
import './CardPage.css'
import {Link, useLocation} from "react-router-dom";
import {useParams} from "react-router-dom";
import {cardsapi, delCard} from "../../../cardsapi";

export interface Props {

}

export const CardPage:FC<Props> = ({}) => {
    const [clicked, setClicked] = React.useState(false);
    let { state } = useLocation();
    const {id} = useParams();
    console.log(state);

    const onClickSuccess = () => {
        setClicked(true);
        console.log('success!');
        console.log(typeof id);
        delCard(Number(id))
    }

    return (
        <>
            <LayoutHeader>
                <InputSearch/>
                <UserContainer/>
            </LayoutHeader>
            <LayoutMain>
                {!clicked ?
                    <div className="focus-card card">
                        <div className="focus-card__header-content">
                            <Link to="/">
                                <Button className="button-exit">Назад</Button>
                            </Link>
                            <span className="card__category">{state.cardLang}</span>
                        </div>
                        <div className="focus-card__description">
                            <p className="card__title card__description card--stop"><span
                                className="span-title">Задание:</span><br/>
                                {state.cardDescription}
                            </p>
                        </div>
                        <div className="focus-card__description">
                            <p className="card__title card__description"><span className="span-title span-mod">Введи решение:</span><br/>
                                <textarea className="textarea" name="textarea" id="textarea"></textarea>
                            </p>
                        </div>
                        <Button onClicked={onClickSuccess} className="app-button card__button-position">Отправить
                            решение</Button>
                    </div>
                    :
                    <div className="focus-card card">
                        <div className="focus-card__header-content">
                            <Link to="/">
                                <Button className="button-exit">Назад</Button>
                            </Link>
                        </div>
                        <div className="focus-card__description">
                            <h1 className="focus-card__message">Задание отправлено</h1>
                        </div>
                    </div>
                }
            </LayoutMain>
        </>
    )
}