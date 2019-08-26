module.exports = {
    entry: {
        main: "./src/js/content/content_main.js",
        background: "./src/js/background.js",
        extension: "./src/js/extension.js"
    },
    output: {
        filename: "./js/[name].js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader",
            exclude: /(node_modules)/
        }]
    }
}