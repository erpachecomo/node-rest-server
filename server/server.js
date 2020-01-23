require('./config/config')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/users', function (req, res) {
    res.json('get usuario')
})

app.post('/users', function (req, res) {
    let body = req.body;
    if (body.name === undefined)
        res.status(400).json({
            ok: false,
            message: 'name is required'
        })
    res.json({ user: body })
})

app.put('/users/:id', function (req, res) {
    let id = req.params.id;
    res.json({
        id
    })
})

app.delete('/users', function (req, res) {
    res.json('delete usuario')
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})