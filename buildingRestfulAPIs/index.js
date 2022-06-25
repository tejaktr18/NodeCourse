// const http = require('http');

// const server = http.createServer((req,res) => {
//     if(req.url === '/'){
//         res.write('Hello World');
//         res.end();
//     }
//     if(req.url === '/api/courses'){
//         res.write(JSON.stringify([1,2,3]));
//         res.end();
//     }
// });

// server.listen(3000);
// console.log('listening on port 3000');

var express = require('express');
var app = express();   // express object

const port = process.env.PORT || 3000         // PORT is an environment variable
app.get('/',(req, res) => {
    res.send(JSON.stringify(port));
});

app.get('/api/courses', (req,res) => {
    res.send(([1,2,3,4,5,6]));
});

app.listen(port, () => console.log(`listening on port ${port}`));
