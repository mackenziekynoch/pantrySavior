const express = require('express');
const path = require('path');
const app = express();
const port = 6500;

app.use('/pantry', express.static('public/pantry'));
app.use('/recipe', express.static('public/recipe'));

app.get('/', (req, res) => {
  res.end();
});

app.get('/pantry', (req, res) => {
  res.end();
})

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});