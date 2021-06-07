const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
})
module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'mdx'],
    // future: {
    //     webpack5: true,
    // },
    // // webpack(config, options) {
    // //     config.resolve.fallback = {fs: false};

    // //     return config;
    // // }
})