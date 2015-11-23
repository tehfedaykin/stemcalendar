var express = require('express');
var app = express();


export default {
   start: () => {
      app.use('/', express.static('./public'));

      var server = app.listen(3000, function () {
        var host = server.address().address;
        var port = server.address().port;
      });

   }
}