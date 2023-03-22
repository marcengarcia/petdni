const express = require('express')
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
    console.log("Connected to the MySql");
    conn.query("CREATE DATABASE IF NOT EXISTS pet_dni", function (err, result) {
        if (err) throw err;
        console.log("db created")
    })

    })



app.get('/', (req, res) => {
    res.send('Holis, soy tu server =)')
})

app.listen(PORT, () => {
    console.log('running on port: ' + PORT)
})
