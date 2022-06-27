const express = require('express');
const app = express();
const genres = [{genreId: 1, name: 'action'}, {genreId: 2, name: 'thriller'}];

const port = process.env.port || 3000;
app.use(express.json());

app.post('/genres', (req,res) => {
    const genre = {genreId: genres.length+1 , name: req.body.name};
    genres.push(genre);
    // console.log(genres);
    res.send(genre);
});

app.get('/genres', (req,res) => {
    res.send(genres);
});

app.get('/genres/:id', (req,res) => {
    const genre = genres.find(ele => ele.genreId === parseInt(req.params.id));
    if(!genre) return res.status(404).send('genre not found');
    res.send(genre);
});

app.delete('/genres/:id',(req,res) => {
    const genre = genres.find(ele => ele.genreId === parseInt(req.params.id));
    if(!genre) return res.status(404).send('genre not found');
    // console.log(genres[-1]);
    genres.splice(genres.indexOf(genre),1);
    res.send(genre);
});

app.listen(port,() => console.log(`listening on port ${port}`));
