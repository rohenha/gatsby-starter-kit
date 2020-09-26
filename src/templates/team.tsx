import React from "react"
import { LayoutComponent } from "Components"

interface ITeamPageProps {}

// export const query = graphql`
//     query TeamPage($slug: String!) {
//         team: datoCmsTeam(slug: {eq: $slug}) {
//         }
//     }
// `;

export default function Team({}: ITeamPageProps) {
    return (
        <LayoutComponent name="team">
            <h1>Team</h1>
        </LayoutComponent>
    )
}
