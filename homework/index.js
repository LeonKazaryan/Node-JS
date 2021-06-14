import e from "express"
import express from "express"

const app = express()
const PORT = 5000

const users = []

app.use(express.json({ extended: true }))

app.post("/register", (req, res) => {
    const{phone = null, password = null} = req.body          
    //достали из рек бади фон и пасворд (по умолчанию выдали им null)

    if (!phone || !password) {
        return res.status(400).json({message: "There is no Phone or Password"})     
    }
    if (password.length < 6) {
        return res.status(400).json({message: "Password should contain 6 or more symbols"})
    }
    // return чтобы код дальше не шёл

    const idx = users.findIndex((el) => {
        return el.phone === phone
    })
    // ищет был ли телефон(el.phone) с таким(phone) который пытается зарегестрироваться (он проходит по всем элементам и сравнивает с phone)
    if (idx !== -1){
        return res.status(400).json({message: "This phone is already registered"})
    }

    //если код дошел до сюда, значит все успешно, и мы добавляем пользователя в массив users
    users.push({
        phone, 
        password,
    })
    res.status(201).json({message: "Success"})
    console.log(users)
})

app.post("/login", (req, res) => {
    const{phone = null, password = null} = req.body     
    
    //снизу проверка если нет телефона и пароля 
    if (!phone || !password) {
        return res.status(400).json({message: "There is no Phone or Password"})     
    }

    //дальше проверка на корректность данных
    const idx = users.findIndex((el) => {
        return el.phone === phone
    })

    if (idx === -1){
        return res.status(400).json({message: "This phone is not registered yet"})     
    } 

    const idp = users[idx].password

    if (idp !== password ) {
        return res.status(400).json({message: "Wrong password"})    
    } 

    return res.status(201).json({message: "Success"})
})

app.listen(PORT, () => {
    console.log('Server is running on PORT: ' + PORT)
})


