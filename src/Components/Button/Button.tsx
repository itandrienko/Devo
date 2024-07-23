import React, {FC} from "react";
import "./Button.css"

interface Props {
    children: React.ReactNode;
    className?: string;
    onClicked?: () => void | boolean;
}

export const Button: FC<Props> = ({children, className, onClicked}) => {
    return (
        <button onClick={onClicked} type="button" className={`app-button ${className}`}>{children}</button>
    )
}