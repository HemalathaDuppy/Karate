const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    res.send("Hello World");
});

app.listen(8087, () => {
    console.log("Server running on port 8087");
});