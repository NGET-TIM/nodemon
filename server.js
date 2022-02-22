var http = require("http");
var _ = require("lodash");


http.createServer(function(req, res) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    res.writeHead(200, { 'Content-Type': 'text/plain' });


    // Lodash
    const num = _.random(0, 20);
    console.log(num);
    // Send the response body as "Hello World"
    res.end('Hello Bro\n');
}).listen(8081);