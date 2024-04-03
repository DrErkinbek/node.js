const http = require('http');

const server = http.createServer((req, res) => {
	const url = req.url;
	if (url === '/') {
		res.writeHead(200, { 'content-type': 'text/html' });
		res.write('<h1>Home Page</h1>');
		res.end();
	} else if (url === '/about') {
		res.writeHead(200, { 'content-type': 'text/html' });
		res.write('<h2>This is about page');
	} else {
		res.writeHead(404, { 'content-type': 'text/html' });
		res.write('<h2>404</h2>')
		res.end();
	}
	
});

server.listen(5500);