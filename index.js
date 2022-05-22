// const http = require('http');

// const PORT = process.env.PORT || 5000;

// const server = http.createServer((req, res ) => {
//   res.writeHead(200, {
//     'Content-type': 'text/HTML;'
//   })
//   res.end(`{${new Date()}}`)
// })

// server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))


const express = require('express');
const app = express();
const cors = require('cors');
const { set } = require('express/lib/application');

const PORT = process.env.PORT || 5000;

app.get('/', cors(), (req, res ) => {
  res.writeHead(200, {
    'Content-type': 'text/HTML;'
  })
  res.end(JSON.stringify(new Date().toLocaleString()));
})

app.use(cors({
  origin: '*'
}));

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
