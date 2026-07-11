const express = require('express');

const mongodb = require('./data/database');
const app = express();

const PORT = process.env.PORT || 3000;

app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if (err) {
        console.error('MongoDB connection failed:', err.message);
        console.error('The server will continue running, but database-backed routes will be unavailable until the connection is fixed.');
    } else {
        console.log('Database connected successfully.');
    }

    app.listen(PORT, () => {
        console.log(`Node is running on port ${PORT}`);
    });
});

