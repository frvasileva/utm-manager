var db = require('./database')
var cors = require('cors')

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(cors())

app.get('/', function(req, res) {
  db.query('select * from utm', function(error, results, fields) {
    if (error) throw error;
    console.log(results);
  });

  res.send('Hello World!')
});


app.get('/utm', function(req, res) {
  db.query('select * from utm', function(error, results, fields) {
    if (error)
      throw error;

    res.json(results);
  });
});

app.get('/utm/:id', function(req, res) {
  db.query('select * from utm where id =' + req.params.id, function(error, results, fields) {
    if (error) throw error;

    res.json(results);
  });
});

app.post('/utm', function(req, res) {

  console.log(req.body);

  db.query(
    'INSERT INTO utm (name, source, medium, term, content) VALUES("name", "source", "medium", "term", "content");',
    function(error, results, fields) {
      if (error) throw error;
      res.json(results);
    });

  res.send('Hello World!')
});



app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})




// POST /utm -> INSERT
// GET /utm -> SELECT ALL
// GET /utm/id -> SELECT

// REST
