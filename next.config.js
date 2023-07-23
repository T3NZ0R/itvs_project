/** @type{import('next').NextConfig}*/
const path = require('path')
const withFonts = require("next-fonts");

module.exports = withFonts({
    fonts: [
        {
            name: "Kyiv Sans",
            file: "/public/fonts/KyivTypeSans-Regular.ttf",
            format: "truetype",
            weight: "normal",
            style: "normal"
        },
        {
            name: "Mariupol",
            file: "/public/fonts/Mariupol-Regular.otf",
            format: "opentype",
            weight: "normal",
            style: "normal"
        }
    ],
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    }
});
