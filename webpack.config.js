import path from 'path'
import HTMLWebPackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

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

    plugins: [
        new HTMLWebPackPlugin({
            template: "./index.html"
        }),
        new CleanWebpackPlugin()
    ],

    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader'] 
        }]
    },

    //девелопмент сервер, папка дист будет пустой, нужен сервер чисто для разработки, работает в реальном времени
    devServer: {
        port: 4200,
        open: true,
    }
}