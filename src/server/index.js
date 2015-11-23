var express = require('express');
var app = express();
var router = express.Router();
// app.get('/events', function(req, resp) {
//   //
// }); // { events: [] } , querystring for params to search by
// app.post('/events') // create
// app.put('/events/:id') // updat
// app.delete('/event/:id')



export default {
  configServer: () => {

  },
   start: () => {
      app.use('/', express.static('./public'));

      app.use('/events', require('./controllers/events'));
      // console.log('router', router);
      var server = app.listen(3000, function () {
        var host = server.address().address;
        var port = server.address().port;
      });

   }
}
