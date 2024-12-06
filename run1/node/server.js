const express = require('express');
const app = express();
const path = require('path');

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.use(express.static(path.join(__dirname, 'static')));

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
