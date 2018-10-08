const express = require('express')
const app = express()

const greeting = ['Julian', 'Alex', 'Mariana', 'Jawad']

app.get('/greeting/:name', (req, res) => {
    console.log(req.params)
    res.send(req.params.name + ' this is working ')
})
app.listen(3000, () => {
    console.log('server is up');
})
