const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/malicious-page-1', (req, res) => {
  res.sendFile(__dirname + '/malicious-page-1.html');
});

app.get('/malicious-page-2', (req, res) => {
  res.sendFile(__dirname + '/malicious-page-2.html');
});

app.get('/malicious-page-3', (req, res) => {
  res.sendFile(__dirname + '/malicious-page-3.html');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
