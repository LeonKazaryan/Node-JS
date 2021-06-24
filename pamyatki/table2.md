module.exports = () => {} - экспортируй отсюда что-то 
module.exports = {название функций} - можно задать функции выше и потом выдать их в экспортц
//сам по себе module.exports - объект

require("./путь к файлу с экспортом") - забрать из экспорта 


export default name - передать по умолчанию
export const name = smth - передать много переменных так можно 

import name from "./URL" - забрать дефолтную
import {a, b } from "./index.js" - забрать несколько переменных 



import { EventEmitter } from "events" - установленный класс в node js 

eventEmitter.on("название события", (data) => {code}) - регистрирует слушателя события 
eventEmitter.emit("название события", "data") - имитировать событие                 /data не обязательно 
eventEmitter.once() - сработает только один раз



import express from "express"

const app = express() - переменная, содержащая всю инфу о сервере
const PORT = porcess.env.PORT || 5000 - создать порт

app.get("/", (req,res) => {             - обратботка гет запроса
    res.json({message:"HELLO WORLD"})   - в формате json отправить клиенту 
    console.log(req.url())              - вывести урл 
    res.status(200).json                - установить статус ответа
                   
})

app.use(express.json({ extended: ture })) - поставить функции промежуточной обработки

app.listen(PORT, () => {                                - запустить сервер на порте 
    console.log('Server is running on PORT: ' + PORT)   - параллельно что-то сделать с запуском кода 
})



import http from "http"

name = http.createServer((request, response) => {   - создать сервер
    request: хранит информацию
    response: управляет отправкой ответа 
} )



import path from "path"

path.dirname('dir/test.json')                 - возвращает из переданного пути название директории (даже не проверяет существует он или нет)
path.isAbsolute ('dir/test.json')             - является ли переданный путь абсолютным (абсолютный - путь от самого начала (от дисков)) а (true / false) 
path.join('C:', 'users', 'dir', 'test.json')  - возвращает нормализованный путь от переданных аргументов (работает на разных системах даже)
path.resolve('./path.js')                     - исходя из переданного относительного путя, возвращает абсолютный 
path.resolve('./')                            - вернет путь до текущей дериктории


import { readFileSync, writeFileSync } from 'fs' 

readFileSync(путь к файлу, { encoding: 'utf-8'}) - читает файл, вернет что начитал
writeFileSync(путь где создать файл, данные которые нужно записать)
                                                                  , {flag:'a'} - можно добавить флаг, чтобы он просто добовлял в уже существующий 

import { readFile, writeFile } from 'fs' 

readFile(путь к файлу, { encoding: 'utf-8'}, callback(err, result)) - читает файл, вернет что начитал
writeFileSync(путь где создать файл, данные,  callback(err, result) - создает новый файл, callback вызывается когда функция выполнится 



import { Router } from 'express'


import jvt from 'jsonwebtoken'

const decoded = jwt.verify(token, 'node.js') - вернет расшифрованные данные, принимает токен и ключ


WEBPACK

npm install -D html-webpack-plugin                          - установка ХТМЛ плагинов
npm install -D clean-webpack-plugin                         - установ плагинов ОЧИСТКИ
import HTMLWebPackPlugin from 'html-webpack-plugin'         - это нужно, чтобы работали plugins HTML
import { CleanWebpackPlugin } from 'clean-webpack-plugin'   - чтобы работал плагин подчистки

npm install -D style-loader css-loader                      - установить лоадеры сss, но импортировать не надо

export default{
    mode: 'development',                                                    - не будет сжимать, даст код, который будут понимать все старые браузеры
          'production'                                                      - готовый код, максимально все сжимает

    context: path.resolve("./", "abstract", "abstract-5(webpack)", "src"),  - сделать папку src по умолчанию, дальше в entry уже можно чисто от src начинать

    entry:{
        main: './index.js',                                                 - путь к входной точке в проект, обычно это индекс js 
    },    

    output: {                                                               - описание того, куда вебпак должен сохранить конечный код
        filename: "[name].[hash].bundle.js",                                - название (можно добавить [hash], который даст индивидуальный айди в название)
        path: path.join('./abstract/abstract-5(webpack)', "dist")           - путь до директории, где он создаст bundle.js
    },

    plugins: [
        new HTMLWebpackPlugin(),                                            - создает в папке dist html файл, подключает все js файлы (не смотрит на HTML)
        ИЛИ
        [new HTMLWebpackPlugin({
            template: './index.html'                                        - путь до хтмл файла, в данном случае он будет подключен к index.html 
        })],

         new CleanWebpackPlugin()                                           - удаляет папку dist и создает новую каждый при npx webpack
    ],

    module: {                                                               - это нужно, чтобы webpack понимал файлы помимо js 
        rules: [{
            test: /\.css$/,                                                 - здесь скидываем формат расширения файла
            use: ['style-loader', 'css-loader']                             - если увидит файл из test'a, пропустит файл через эти лоадеры
        }]
    }
}


npm install - установить пакет, зависимости, всё-всё
npm install -D nodemon - установить devDependencies (они нужны только для разработки)

node названиеФайла - запустить код в терминале 
nodemon названиеФайла - автоматически сохраняет файл и не нужно кадый раз запускать сервер




200-299 - успешный запрос
400-499 - ошибка со стороны клиента
500-599 - ошибка со стороны сервера

401 - не зарегестрирован пользователь
401 - нет прав

Npm init -y
Git init
.gitignore
node_modules
Git add .
Git commit . -m»message from commit»
Git push
Git remote add
