import path from 'path'
import HTMLWebPackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

export default{
    //entry - путь к входной точке в проект, обычно это индекс js 
    mode: 'development',

    context: path.resolve("./", "abstract", "abstract-5(webpack)", "src"),

    entry:{
        main: './index.js',
        click: './clicks.js',
    },      

    output: {                                                                             //описание того, куда вебпак должен сохранить конечный код
        filename: "[name].[hash].js",                                                    //название 
        path: path.join(path.resolve(), 'abstract', 'abstract-5(webpack)', 'dist')      //путь до директории, где он создаст bundle.js
    },

    optimization: {
        splitChunks:{
            chunks: 'all',
        },
    },

    plugins: [
        new HTMLWebPackPlugin({
            template: "./index.html"
        }),

        new CleanWebpackPlugin(),

        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve('./','abstract', 'abstract-5(webpack)', 'src', 'favicon.ico' ),
                to: path.resolve('./','abstract', 'abstract-5(webpack)', 'dist')
            }],
        })
    ],

    module: {
        rules: [
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'] 
         },

         {
             test: /\.(png|jpg|svg|gif)$/,
             use: ['file-loader'],
         }
    ]
    },

    //девелопмент сервер, папка дист будет пустой, нужен сервер чисто для разработки, работает в реальном времени
    devServer: {
        port: 4200,
        open: true,
    }
}