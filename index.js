// Import modules
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')

// Invoke modules
const app = express()

// Initiate modules
app.set('view engine', 'ejs')
app.use(ejsLayouts)

// Create routes
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/faves/animals', (req, res) => {
    const animals = ['giraffe', 'peacock', 'aligator', 'unicorn']
    res.render('faves/faveAnimals', { animals })
})

app.get('/faves/foods', (req, res) => {
    const foods = ['pizza', 'steak', 'ice cream', 'pasta']
    res.render('faves/faveFoods', { foods })
})

app.get('/hates/animals', (req, res) => {
    const animals = ['cat', 'snake', 'spider', 'demagorgen']
    res.render('hates/hateAnimals', { animals })
})

app.get('/hates/foods', (req, res) => {
    const foods = ['celery', 'raisins', 'yogurt', 'parsley']
    res.render('hates/hateFoods', { foods })
})

// Listen command
app.listen(8000, () => {
    console.log('server has started!')
})