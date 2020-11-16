const hatesController = require('express').Router()

hatesController.get('/animals', (req, res) => {
    const animals = ['cat', 'snake', 'spider', 'demagorgen']
    res.render('hates/animals', { animals })
})

hatesController.get('/foods', (req, res) => {
    const foods = ['celery', 'raisins', 'yogurt', 'parsley']
    res.render('hates/foods', { foods })
})

module.exports = hatesController