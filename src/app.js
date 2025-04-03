const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`Connection ${PORT}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/login-alumno', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login-screen/login-alumno.html'));
});

app.get('/login-personal-educativo', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login-screen/login-personal-educativo.html'));
});

app.get('/login-padre', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login-screen/login-padre.html'));
});