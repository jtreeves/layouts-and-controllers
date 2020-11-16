// Import modules
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const favesController = require('./controllers/favesController')
const hatesController = require('./controllers/hatesController')

// Invoke modules
const app = express()

// Initiate modules
app.set('view engine', 'ejs')
app.use(ejsLayouts)

app.use('/faves', favesController)
app.use('/hates', hatesController)

// Create routes
app.get('/', (req, res) => {
    res.render('index')
})

// Listen command
app.listen(8000, () => {
    console.log('server has started!')
})