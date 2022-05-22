const http = require('http');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res ) => {
  res.writeHead(200, {
    'Content-type': 'text/HTML;'
  })
  res.end(`{${new Date()}}`)
})

server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
