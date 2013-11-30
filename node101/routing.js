var http = require('http'),
	url = require('url');

function onRequest(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log('request for '+ pathname +' received!')

	if ( pathname === '/start' ) {
		response.writeHead(200, {"Content-Type" : "text/html"});
		response.write("Hello");
		response.end();
	} else if ( pathname === '/finish' ) {
		response.writeHead(200, {"Content-Type" : "text/html"});
		response.write("Goodbye!");
		response.end();
	} else {
		response.writeHead(404, {"Content-Type" : "text/plain"});
		response.end('404 Not Found');
	}
}

http.createServer(onRequest).listen(9999);
console.log('Server has started.')