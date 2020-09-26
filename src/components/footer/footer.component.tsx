import * as React from "react"

import "./footer.component.sass"

interface IFooterComponentProps {}

export function FooterComponent({}: IFooterComponentProps) {
    return (
        <React.Fragment>
            <footer>
                <div className="container">
                    <p>footer</p>
                </div>
            </footer>
        </React.Fragment>
    )
}
