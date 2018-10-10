const express = require('express');
const app = express();
const Objects = require('./models/objects')
const methodOverride = require('method-override')


app.use(methodOverride('_method'));

app.get('/', (request, response) => {
  response.send('people are objects')
})

app.get('/objects', (req, res) => {
  res.render('index.ejs', {
    classmates: Objects
  });
});

app.delete('/objects/:index', (req, res) => {
  Objects.splice(req.params.index, 1)
  res.redirect('/objects');
})


app.listen(3000, () => {
  console.log("I am listening")
});
