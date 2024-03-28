const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.end('Welcome to our home page')
		return
	}
	if (req.url === '/about') {
		res.end('This about page')
		return
	}
	res.end(`
	<h1>404</h1>
	`)
})

server.listen(5000);