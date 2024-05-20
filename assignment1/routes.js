const url = require('url');
const querystring = require('querystring');

const handleRequest = (req, res) => {

    const url = req.url;
    if (url === '/') {
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>Assignment 1</title></head>');
      res.write(
        '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
      );
      res.write('</html>');
      return res.end();
    }
    if (url === '/users') {
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>Assignment 1</title></head>');
      res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
      res.write('</html>');
      return res.end();
    }
    // Send a HTML response with some "Page not found text
    if (url === '/create-user') {
      const body = [];
      req.on('data', chunk => {
        body.push(chunk);
      });
      req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody.split('=')[1]); // username=whatever-the-user-entered
      });
      res.statusCode = 302;
      res.setHeader('Location', '/');
      res.end();
    }

//   const parsedUrl = url.parse(req.url, true);

//   if (req.method === 'GET' && parsedUrl.pathname === '/') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(`
//       <html>
//       <head>
//       <h1>Welcome to the Home Page</h1>
//       </head>
//       <form action="/create-user" method="POST">
//         <input type="text" name="username" placeholder="Enter username" required />
//         <button type="submit">Create User</button>
//       </form>
//       </html>
//     `);
//   } else if (req.method === 'GET' && parsedUrl.pathname === '/user') {
//     const users = ['User1', 'User2', 'User3'];
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(users));
//   } else if (req.method === 'POST' && parsedUrl.pathname === '/create-user') {
//     let body = '';
//     req.on('data', chunk => {
//       body += chunk.toString();
//     });
//     req.on('end', () => {
//       const parsedBody = querystring.parse(body);
//       console.log(`Username received: ${parsedBody.username}`);
//       res.writeHead(302, { Location: '/' });
//       res.end();
//     });
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/plain' });
//     res.end('404 Not Found');
//   }
};

module.exports = {
  handleRequest
};
