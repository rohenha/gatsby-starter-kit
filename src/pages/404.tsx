import React from "react"
import { LayoutComponent } from "Components"

// interface IMediasPageProps {
//     data: {
//         page: IPageCurrent
//     }
// }

export default function Error({ data }: any) {
    return (
        <LayoutComponent name="404">
            <React.Fragment>
                <h1>404</h1>
            </React.Fragment>
        </LayoutComponent>
    )
}
