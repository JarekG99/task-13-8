var fs = require('fs');
var http = require('http');
var colors = require('colors');


fs.readFile('./index.html','utf-8', function(err, data) {
  console.log('Data to be sent:'.blue, data);

        });
  var server = http.createServer();

  server.on('request', function (request, response) {
      response.setHeader("Content-Type", "text/html; charset=utf-8");
      if (request.method === 'GET' && request.url === '/.') {
            response.write(data);
                    response.end();
            } else {
                    response.statusCode = 404;
                    response.write('<h1>404: The page does not exist!</h1>');
                    response.end();
            }
        });

        server.listen(8080);
