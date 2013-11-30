var http = require('http'),
	url = require('url');

var route = {
	routes : {},
	for : function (path, handler) {
		this.routes[path] = handler;
	}
};

route.for('/start', function (request, response) {
	response.writeHead(200, {"Content-Type" : "text/html"});
	response.write("Hello");
	response.end();
});

route.for('/finish', function (request, response) {
	response.writeHead(200, {"Content-Type" : "text/html"});
	response.write("Goodbye!");
	response.end();
});

function onRequest(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log('request for '+ pathname +' received!')

	if ( typeof route.routes[pathname] === 'function' ) {
		route.routes[pathname](request, response);
	} else {
		response.writeHead(404, {'Content-Type' : 'text/plain'});
		response.end('404 Not Found');
	}
}

http.createServer(onRequest).listen(9999);
console.log('Server has started.')