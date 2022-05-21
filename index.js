const http = require('http');
const { listenerCount } = require('process');

const PORT = process.env.PORT || 5000;

const server = http.createServer( (req, res ) => {
  res.writeHead(200, {
    'Content-type': 'text/HTML;'
  })
  res.end(`<h1>${new Date()}</h1>`)
})

server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))


 