const autoprefixer = require("autoprefixer")
module.exports = {
    plugins: [
        autoprefixer({
            flexbox: true,
            grid: true,
            inline: true,
            remove: true,
        }),
    ],
}
