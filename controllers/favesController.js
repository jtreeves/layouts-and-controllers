const favesController = require('express').Router()

favesController.get('/animals', (req, res) => {
    const animals = ['giraffe', 'peacock', 'aligator', 'unicorn']
    res.render('faves/animals', { animals })
})

favesController.get('/foods', (req, res) => {
    const foods = ['pizza', 'steak', 'ice cream', 'pasta']
    res.render('faves/foods', { foods })
})

module.exports = favesController