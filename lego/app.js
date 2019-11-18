
const express = require('express');
const lego = require('./lego.json'); 
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Homepage',
    lego: lego.building 
  });
});

app.get('/profile', (req, res) => {
  const building = lego.building.find((p) => p.id === req.query.id);
  res.render('profile', {
    title: `About ${building.name} ${building.legobuilding}`,
    building,
  });
});

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});
