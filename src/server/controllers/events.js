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
  var query = db.query('SELECT * from events', (err, result) => {
    if(err) {
      return console.error('error running query', err);
    }
    res.write(JSON.stringify(result.rows));
    res.end();
    // db.end();
  });
});

module.exports = router;
