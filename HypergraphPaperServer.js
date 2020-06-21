fs = require('fs');
http = require('http');

server = http.createServer();
server.on('request', (request,response) => {
    response.writeHead(200,{'Content-Type':'text/html'});
    if(request.url=='/now'){
        response.write('dave');
    }
    response.write('test');
    response.end();
}).listen(8080);