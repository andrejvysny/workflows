const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World from docker swarm<br/><h1>version 1</h1>'));

app.listen(3000, () => console.log('Example app listening on port 3000!'))
