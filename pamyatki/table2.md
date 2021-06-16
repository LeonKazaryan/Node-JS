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




npm install - установить пакет, зависимости, всё-всё
npm install -D nodemon - установить devDependencies (они нужны только для разработки)

node названиеФайла - запустить код в терминале 
nodemon названиеФайла - автоматически сохраняет файл и не нужно кадый раз запускать сервер




200-299 - успешный запрос
400-499 - ошибка со стороны клиента
500-599 - ошибка со стороны сервера

401 - не зарегестрирован пользователь


Npm init -y
Git init
.gitignore
node_modules
Git add .
Git commit . -m»message from commit»
Git push
Git remote add
