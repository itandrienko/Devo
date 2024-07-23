import React, {FC} from "react";
import {Button} from "../Button/Button";
import "./Card.css"
import {Link} from "react-router-dom";

interface Props {
    id: number,
    lang: string,
    description: string,
}

export const Card:FC<Props> = ({id, description, lang}) => {
    const [copyClicked, setCopyClicked] = React.useState(false);
    const [cardId, setCardId] = React.useState(0);
    const [cardLang, setCardLang] = React.useState('');
    const [cardDescription, setCardDescription] = React.useState('');

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

    const onClickOpen = () => {
        setCardId(id)
        setCardLang(lang)
        setCardDescription(description)

        console.log(cardId, cardLang, cardDescription);
    }

    React.useEffect(()=>{
        onClickOpen()
    }, [])

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
            <Link to={`/card/${cardId}`} state={{cardId, cardLang, cardDescription}}>
                <Button onClicked={onClickOpen} className="app-button card__button-position">Открыть</Button>
            </Link>
        </div>
    )
}