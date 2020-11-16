// Import modules
const express = require('express')

// Invoke modules
const app = express()

// Create routes
app.get('/', (req, res) => {
    res.send('hello from faves-and-hates')
})

// Listen command
app.listen(8000, () => {
    console.log('server has started!')
})