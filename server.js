const express = require('express');

const app = express();

app.use(express.static('./dist/venvu-client'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/venvu-client' }
  );
});

app.listen(process.env.PORT || 8100);

console.log(`Running on port ${process.env.PORT || 8100}`)
