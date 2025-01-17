import React, {FC} from "react";
import './Layout.css'

interface Props {
    children: React.ReactNode;
}

export const LayoutHeader: FC<Props> = ({children}) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    {children}
                </div>
            </div>
        </header>
    )
}