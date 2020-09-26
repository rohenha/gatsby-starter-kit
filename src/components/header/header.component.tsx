import * as React from "react"

import "./header.component.sass"

interface IHeaderComponentProps {}

interface IHeaderComponentState {}

export class HeaderComponent extends React.Component<
    IHeaderComponentProps,
    IHeaderComponentState
> {
    private constructor(props: IHeaderComponentProps) {
        super(props)
    }

    public render(): React.ReactElement<any> {
        return (
            <header className="header">
                <div className="container">
                    <p>Header</p>
                </div>
            </header>
        )
    }
}
