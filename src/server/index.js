const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const db = require('./models')

app.get('/', (req, res) => {
    res.send('Holis, soy tu server =)')
})
db.sequelize.sync().then((req) => {
    app.listen(PORT || 3001, () => {
        console.log('running on port: ' + PORT)
    })
})