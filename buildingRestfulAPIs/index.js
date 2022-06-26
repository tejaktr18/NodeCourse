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

app.use(express.json());

const port = process.env.PORT || 3000         // PORT is an environment variable

const courses = [{id: 1, name: 'course1'},{id: 2, name: 'course2'}, {id: 3, name: 'course3'}]
app.get('/',(req, res) => {
    res.send(JSON.stringify(port));
});

app.get('/api/courses', (req,res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req,res) => {
    let course = courses.find(element => element.id === parseInt(req.params.id));
    if(course) res.send(course);
    res.status(404).send('Course id not found');
    
    // res.send({"params": req.params,"query": req.query});
    // res.send(req.query);
});

app.post('/api/courses', (req,res) => {
    const course = {
        id: courses.length +1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
});

app.listen(port, () => console.log(`listening on port ${port}`));
