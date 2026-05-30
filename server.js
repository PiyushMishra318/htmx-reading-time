const express = require('express');
const path = require('path');
const { readTimeForText } = require('./lib/formatReadTime');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/readtime', (req, res) => {
  const text = req.body.text ?? '';
  const label = readTimeForText(text.trim() === '' ? ' ' : text);
  res.type('html').send(`<p class="stats">${label}</p>`);
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Reading time app running at http://localhost:${port}`);
  });
}

module.exports = app;
