const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const db = require('./models')

const cors = require('cors')
const { User, Pet } = require('./models')

app.use(cors())
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
    if (err) {
      console.log(err)
    }
  })
  res.send('exito')
})

// app.get('/pets/create', (req, res) => {
//   Pet.create({
//     name: 'Molly',
//     age: 3,
//     breed: 'Labrador',
//     sex: 'Hembra',
//     neutered: 'Si',
//     vaxxed: 'Si',
//     chipped: 'Si',
//     allergies: 'No',
//     diet: 'BARF',
//     other: 'Amarilla',
//     other_info: 'Dieta fisiologica natural (800gs)',
//     owner_id: 1,
//   }).catch((err) => {
//     if (err) {
//       console.log(err)
//     }
//   })
//   res.send('molly exito')
// })

app.get('/pets/create', (req, res) => {
  Pet.create({
    name: 'Mia',
    age: 2,
    breed: 'Border Collie',
    sex: 'Hembra',
    neutered: 'Si',
    vaxxed: 'Si',
    chipped: 'Si',
    allergies: 'No',
    diet: 'BARF',
    other: 'Azul Merle',
    other_info: 'Dieta fisiologica natural (500gs)',
    owner_id: 1,
  }).catch((err) => {
    if (err) {
      console.log(err)
    }
  })
  res.send('mia exito')
})

app.get('/pets/:id', (req, res) => {
  Pet.findByPk(req.params.id)
    .then((pet) => {
      if (pet) {
        let petData = {
          name: pet.name,
          age: pet.age,
          breed: pet.breed,
          sex: pet.sex,
          neutered: pet.neutered,
          vaxxed: pet.vaxxed,
          chipped: pet.chipped,
          allergies: pet.allergies,
          diet: pet.diet,
          other: pet.other,
          other_info: pet.other_info
        }
        res.json(petData)
      } else {
        res.status(404).json({ message: 'Pet not found' })
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Server error' })
    })
})

app.get(`/other-info/:id`, (req, res) => {
  Pet.findByPk(req.params.id)
    .then((pet) => {
      if (pet) {
        let petData = {
          other_info: pet.other_info
        }
        res.json(petData)
      } else {
        res.status(404).json({ message: 'Pet not found' })
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Server error' })
    })
})

app.get('/users/:email', (req, res) => {
  User.findOne({ where: { email: req.params.email } })
    .then((user) => {
      if (user) {
        let humanData = {
          name: user.first_name,
          phone: user.phone,
          instagram: user.instagram,
          twitter: user.twitter,
          facebook: user.facebook,
          other: user.other
        }
        res.json(humanData)
      } else {
        res.status(404).json({ message: 'User not found' })
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Server error' })
    })
})

app.get('/pets/user/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    const pets = await Pet.findAll({
      where: {
        owner_id: userId
      }
    });

    res.json(pets);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' })
  }
})

