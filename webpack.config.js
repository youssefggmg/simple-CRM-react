const path=require("path");
const HTMLwebpackPlugin = require("html-webpack-plugin");

module.exports={

    entry:"./src/index.js",

    output:{
        path:path.join(__dirname,"/dist"),
        filename:"dundle.js",
    },
    plugins:[
        new HTMLwebpackPlugin({
            template:"./src/index.html",
        })
    ],
    module:{
        rules:[
            {
                test:/.js$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader",
                }
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader:"style-loader",
                    },
                    {
                        loader:"css-loader",
                    }
                ]
            },
            //this s for fontawsome
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/, // Rule to handle font files
                use: {
                    loader: "file-loader",
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                    },
                },
            }
        ]
    }
}