const express = require('express');

const app = express();

// GET /
app.get('/', (req, res) => {
    res.status(200).send('Welcome to my Backend Development Lab 1!');
});

// GET /about
app.get('/about', (req, res) => {
    res.status(200).json({
        name: 'Vuppunuthula Jaya Adithya',
        section: '211 - 1E'
    });
});

// GET /time
app.get('/time', (req, res) => {
    res.status(200).json({
        currentDateTime: new Date()
    });
});

// 404 for unknown routes — MUST BE LAST
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Start server
app.listen(3000, () => {
    console.log('Express server running on port 3000');
});