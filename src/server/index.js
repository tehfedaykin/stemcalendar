var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');

export default {
   start: () => {
      app.use('/assets', express.static('./public/assets'));

      app.use( bodyParser.json() );       // to support JSON-encoded bodies
      app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
        extended: true
      })); 
      app.use('/api/events', require('./controllers/events'));
      var server = app.listen(3000, function () {
        var host = server.address().address;
        var port = server.address().port;
      });

      app.all('/*', function(req, res) {
        res.sendfile('./public/index.html');
      });

   }
}
