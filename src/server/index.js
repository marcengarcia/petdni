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

app.get('/users/:email', async (req, res) => {
    try {
      const user = await User.findOne({ where: { email: req.params.email } })
      if (user) {
        const { first_name, last_name, phone, instagram, twitter, facebook, other } = user
        const humanData = {
          name: `${first_name}`,
          phone,
          instagram,
          twitter,
          Facebook: facebook,
          other,
        }
        res.json(humanData)
      } else {
        res.status(404).json({ message: 'User not found' })
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Server error' })
    }
  })
  