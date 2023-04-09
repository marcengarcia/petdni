const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const db = require('./models')

const { User} = require('./models')

app.get('/', (req, res) => {
    res.send('Holis, soy tu server =)')
})
db.sequelize.sync().then((req) => {
    app.listen(PORT || 3001, () => {
        console.log('running on port: ' + PORT)
    })
})

app.get('/select', (req, res) => {
    res.send('select')
})

app.get('/users/create', (req, res) => {
    User.create({
        first_name: 'Marce',
        last_name: 'G',
        email: 'marcengarcia@gmail.com',
        password: 'test123',
        admin: '1',
        active: '1',
        phone: '2915111033',
        instagram: '@marcengarcia',
        twitter: '@marcengarcia',
        facebook: '@marcengarcia',
        other: 'neh',
    }).catch((err) => {
        if(err) {
            console.log(err)
        }
    })
    res.send('exito')
})

app.get('/delete', (req, res) => {
    res.send('delete')
})