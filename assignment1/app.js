const http = require('http');
const PORT = 3000;

const handleRequest = require('./routes');

const server = http.createServer(handleRequest);

server.listen(PORT, () =>{
    console.log(`server is running on http://localhost:${PORT}`)
});