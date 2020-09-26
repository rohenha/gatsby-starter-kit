const path = require("path")

exports.onCreateWebpackConfig = ({ stage, actions, plugins, loaders }) => {
    const config = {
        plugins: [
            plugins.define({
                "global.GENTLY": false,
            }),
        ],
    }
}

////////////////////////////////////////
// Function to create pages from Data //
////////////////////////////////////////

// exports.createPages = ({ graphql, actions }) => {
//     const { createPage } = actions;

//     return new Promise((resolve, reject) => {
//         graphql(`
//             {
//                 teams: allDatoCmsTeam {
//                     edges {
//                         node {
//                             slug
//                         }
//                     }
//                 }
//                 products: allDatoCmsProduct {
//                     edges {
//                         node {
//                             slug
//                         }
//                     }
//                 }
//             }
//         `).then(result => {
//             result.data.teams.edges.map(({ node: team }) => {
//                 createPage({
//                     path: `equipes/${team.slug}`,
//                     component: path.resolve("./src/templates/team.tsx"),
//                     context: {
//                     slug: team.slug
//                     }
//                 });
//             });
//             resolve();
//         });
//     });
// };
