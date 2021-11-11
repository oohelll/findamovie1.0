const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            // Cari video tentang penggunaan file dan url loader
            {
                test: /\.(png|jpe?g|svg)$/,
                loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'image/',
                            publicPath: 'image/'
                        }
                    
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ]
}