import React, {FC} from "react";

interface Props {
    children: any;
}

export const LayoutMain: FC<Props> = ({children}) => {
    return (
        <main className="main">
            <div className="container">
                <section className="main__section">
                    {children}
                </section>
            </div>
        </main>
    )
}