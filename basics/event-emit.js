const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
	res.end('Welcome');
	return;
});

server.listen(8000)