const express  = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello benja');
});

const port = 3000;

app.listen(process.env.PORT || port);
console.log('Web server is listening at port' + (process.env.PORT || port));   