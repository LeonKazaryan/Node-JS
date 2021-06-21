import M from 'minimatch'
import path from 'path'

export default{
    //entry - путь к входной точке в проект, обычно это индекс js 
    entry:{
        main: './abstract/abstract-5(webpack)/src/index.js',
        click: './abstract/abstract-5(webpack)/src/clicks.js',
    },        
    output: {                                                   //описание того, куда вебпак должен сохранить конечный код
        filename: "[name].bundle.js",                           //название 
        path: path.join(path.resolve(), "webpack", "dist")      //путь до директории, где он создаст bundle.js
    }
}