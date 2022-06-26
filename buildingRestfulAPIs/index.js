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

const courses = [{'id': 1, 'name': 'course1'},{'id': 2, 'name': 'course2'}, {'id': 3, 'name': 'course3'}]
app.get('/',(req, res) => {
    res.send(JSON.stringify(port));
});

app.get('/api/courses', (req,res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req,res) => {
    let cid = courses.find(element => element.id === parseInt(req.params.id));
    if(cid) res.send(cid);
    res.status(404).send('Course id not found');
    
    res.send({"params": req.params,"query": req.query});
    // res.send(req.query);
});

app.listen(port, () => console.log(`listening on port ${port}`));
