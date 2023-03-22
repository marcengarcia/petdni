const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3001
const mysql = require('mysql')

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pet_dni",
})

conn.connect(function (err) {
    if (err) throw err;
    conn.query("CREATE DATABASE IF NOT EXISTS pet_dni", function (err, result) {
        if (err) throw err;
    })
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/api/insert', (req, res) => {
    
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const password = req.body.password

    const sqlInsert = "INSERT INTO  users (firstName, lastName, email, password) VALUES (?,?,?,?)"
    conn.query(sqlInsert, [firstName, lastName, email, password], (err, result) => {
        console.log(err)
    })
})

app.listen(PORT, () => {
    console.log('running on port: ' + PORT)
})
