const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const controller = require('./controller.js');

app.use(express.urlencoded());
app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../client')));

app.post('/submit', (req, res)=> {
  controller.submit(req, res);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))