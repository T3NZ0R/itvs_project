/** @type{import('next').NextConfig}*/
const path = require('path');
const withFonts = require('next-fonts');

module.exports = withFonts({
    webpack(config) {
        return config;
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        outputStyle: 'compressed'
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'exprszojjwnnpmywqhwm.supabase.co'
            }
        ]
    }
});
