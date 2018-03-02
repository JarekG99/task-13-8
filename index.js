var fs = require('fs');
var http = require('http');
var colors = require('colors');

function getData(err, data) {
     console.log('Data to be sent:'.blue, data);
    this.write(data);
    this.end();
}

  var server = http.createServer();

  server.on('request', function (request, response) {
      response.setHeader("Content-Type", "text/html; charset=utf-8");
      if (request.method === 'GET' && request.url === '/') {
          fs.readFile('./index.html','utf-8', getData.bind(response));
            } else {
                    response.statusCode = 404;
                    response.write('<h1>404: The page does not exist!</h1>');
                    response.end();
            }
        });

        server.listen(8080);
