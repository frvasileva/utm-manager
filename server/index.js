var db = require('./database')
const express = require('express')
const app = express()

app.get('/', function (req, res) {
	db.query('select * from utm', function (error, results, fields) {
	  if (error) throw error;
	  console.log(results);
	});

  	res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})