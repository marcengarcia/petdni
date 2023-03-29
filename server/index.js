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

app.post('/api/sign-up', (req, res) => {

    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const email = req.body.email
    const password = req.body.password

    const sqlInsert = "INSERT INTO users (firstname, lastname, email, password) VALUES (?,?,?,?)"
    conn.query(sqlInsert, [firstname, lastname, email, password], (err, result) => {
        console.log(err)
    })
})

app.get('/api/checkEmail/:email', (req, res) => {
    const email = req.params.email
    const query = `SELECT * FROM users WHERE email = '${email}'`
    conn.query(query, (err, result) => {
        if (err) {
            res.send({ err: err })
        } else {
            res.send(result)
        }
    })
})

app.get('/api/checkEmailAndPassword/:email/:password', (req, res) => {
    const email = req.params.email
    const password = req.params.password
    const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`
    conn.query(query, (err, result) => {
        if (err) {
            res.send({ err: err })
        } else {
            res.send(result)
        }
    })
})

