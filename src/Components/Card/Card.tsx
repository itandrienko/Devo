import React, {FC} from "react";
import {Button} from "../Button/Button";
import "./Card.css"

interface Props {
    id: number,
    lang: string,
    description: string,
}

export const Card:FC<Props> = ({id, description, lang}) => {
    const [copyClicked, setCopyClicked] = React.useState(false);

    React.useEffect(()=>{
        if(copyClicked === true){
            setTimeout(()=>{
                setCopyClicked(false);
            }, 1000)
        }
    }, [copyClicked]);

    const onClickCopy = () => {
        navigator.clipboard.writeText(id.toString())
            .then(() => {
                setCopyClicked(true);
                console.log("Copied " + id.toString());
            })
            .catch(err => {
                console.log('Copied error', err);
            });
    }

    return (
        <div className="card">
            <div className="card__header">
                {copyClicked ?
                <Button
                    onClicked={onClickCopy}
                    className="app-button card-button-copy"
                >Скопировано
                </Button>
                : <Button
                    onClicked={onClickCopy}
                    className="app-button card-button-copy"
                >Копировать
                </Button>
                }
                <span className="card__category">{lang}</span>
            </div>
            <p className="card__description">{description}</p>
            <Button className="app-button card__button-position">Открыть</Button>
        </div>
    )
}