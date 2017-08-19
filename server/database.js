var mysql = require('mysql');
var config = require('./config')
var connection = mysql.createConnection(config.database);

module.exports = {
	query: function (queryString, callback) {
		// connection.connect();
		connection.query(queryString, callback)
		// connection.end();
	}
}