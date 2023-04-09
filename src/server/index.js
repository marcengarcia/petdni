const express = require('express')
const app = express()
const PORT = 3001

app.get('/', (req, res) => {
    res.send('Holis, soy tu server =)')
})

app.listen(PORT || 3001, () => {
    console.log('running on port: ' + PORT)
})