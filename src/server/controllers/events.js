var db = require('../db')
  , express = require('express')
  , router = express.Router();

router.get('/', (req, res) => {
  let query = 'SELECT * from events';
  let data = [];
  if(req.query) {
    let iter = 1;
    for (var key in req.query) {
      query = iter === 1 ? query + ' WHERE '+ key + '=($' + iter + ')' : query = query + ' AND '+ key + '=($' + iter + ')';
      data.push(req.query[key])
      iter++;
    }
  }
  db.query(query, data, (err, result) => {
    if(err) {
      return console.error('error running query', err);
    }
    res.write(JSON.stringify(result.rows));
    res.end();
    // db.end();
  });
});

router.post('/', (req, res) => {
  let data = req.body;
  var createQuery = 'INSERT INTO events(startdate, enddate, geolocation, venue, description, organizer, tags) values($1, $2, $3, $4, $5, $6, $7)';
  var query = db.query(createQuery, [data.startdate, data.endate, data.geolocation, data.venue, data.description, data.organizer, data.tags], (err, result) => {
    if(err) {
      return console.error('error running query', err);
    }
    res.write(JSON.stringify(result.rows));
    res.end(); 
  });
})

router.get('/position/:lat/:lon', (req, res) => {
  var locationQuery = 'SELECT *, point($1, $2) <@> geolocation::point AS stem_distance ' +
    'FROM events ' +
    // 'WHERE (point($1, $2) <@> geolocation) < 100 ' +
    'ORDER BY stem_distance;';
  var query = db.query(locationQuery, [req.params.lat, req.params.lon], (err, result) => {
    if(err) {
      return console.error('error running query', err);
    }
    res.write(JSON.stringify(result.rows));
    res.end();
    // db.end();
  });
});

module.exports = router;
