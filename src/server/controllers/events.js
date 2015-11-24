var db = require('../db')
  , express = require('express')
  , router = express.Router();

router.get('/', (req, res) => {
  var query = db.query('SELECT * from events', (err, result) => {
    if(err) {
      return console.error('error running query', err);
    }
    res.write(JSON.stringify(result.rows));
    res.end();
    // db.end();
  });
})

router.put('/', (req, res) => {
  var query = db.query('SELECT * from events', (err, result) => {
    if(err) {
      return console.error('error running query', err);
    }
    res.write(JSON.stringify(result.rows));
    res.end();
    // db.end();
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
