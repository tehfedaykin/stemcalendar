'use strict';

var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://jenniferwadella@localhost:5432/stem_events';
// postgres://username:password@localhost/database
var client = new pg.Client(connectionString);
client.connect();
// var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
// query.on('end', function() { client.end(); });

console.log('Database connection established')
module.exports = client;
