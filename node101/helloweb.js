var http = require('http');

http.createServer(function (request, response) {
	response.writeHead(200, {"Content-Type" : "text/html"});
	response.write("<html>");
	response.write("<head><title>NodeJS</title></head>");

	response.write("<body><h1>Hello Web</h1></body>");
	response.write("</html>");
	response.end();

}).listen(9999);