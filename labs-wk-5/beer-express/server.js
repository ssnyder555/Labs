const express = require('express');
const app = express()
const Beer = require('./models/beers')
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended: false}));
// this is to make sure something is show up on the page
app.get('/', (req, res) => {
  res.send('is something showing up?')
})

// this is to make sure all the data is showing up on the same page
app.get('/beers', (req, res) => {
  res.send(Beer)
})

app.get('/beers/new', (req, res) => {
  res.render('new/ejs')
})

app.post('/beers', (req, res) => {

  console.log(req.body, ' this is where our info from the beer will live');

  if(req.body.readyToDrink === 'on') {
    req.body.readyToDrink = true
  }
})

// this is to make sure the exact index of data is showing up
app.get('/beers/:index', (req, res) => {
  // res.send(Beer[req.params.index])
  res.render('shows.ejs', {
        beer: Beer[req.params.index]
  })
})



app.listen(3000, () => {
  console.log('This app is Alive!');
})
