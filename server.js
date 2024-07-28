const express = require('express')
const app = express()
const PORT = 8000

const names = {

    'naruto': {

        'name': 'Naruto',
        'location': 'Japan',
        'gender': 'male',
        'specialMove': 'Rasengan'
    },

    'sasuke': {

        'name': 'Sasuke',
        'location': 'Japan',
        'gender': 'male',
        'specialMove': 'Chidori'
    },

    'sakura': {

        'name': 'Sakura',
        'location': 'Japan',
        'gender': 'female',
        'specialMove': 'Shannaro punch'
    },

    'unknown': {

        'name': 'unknown',
        'location': 'unknown',
        'gender': 'unknown',
        'specialMove': 'unknown'
    }
}

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html')
});

app.get('/about/:name', (req, res) => {

    const name = req.params.name.toLocaleLowerCase()
    if (names[name]) {
        res.json(names[name])
    }
    else {
        res.json(names['unknown'])
    }

})

app.listen(PORT, (req, res) => {

    console.log(`It's up and running on port: ${PORT}`)
});

