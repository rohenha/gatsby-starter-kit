import React from "react"
// import { graphql } from "gatsby";
import { LayoutComponent } from "Components"

interface IHomePageProps {}

// export const query = graphql`
//     query HomePage {
//         teams: allDatoCmsTeam {
//             nodes {
//                 ...teamFragment
//             }
//         }
//     }
// `;

export default function Home({}: IHomePageProps) {
    return (
        <LayoutComponent name="home">
            <React.Fragment>
                <div className="container">
                    <h1>Index</h1>
                </div>
            </React.Fragment>
        </LayoutComponent>
    )
}
