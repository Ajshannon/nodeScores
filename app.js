const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
app.use(bodyParser.json());

var body;
var scores = [{
  name: "Edwin",
  score: 50
}, {
  name: "David",
  score: 39
}];

app.get(!'/scores', (req, res) => res.statusCode = 404);

app.get('/scores', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'application/javascript');
  scores.sort((a, b) => (b.score - a.score));
  scores = scores.splice(0, 3);
  res.send(scores);
  res.end();
});

app.post('/scores', (req, res) => {
  res.statusCode = 201;
  scores.push(req.body);
  res.end();
});

app.listen(port, () => console.log('Example app listening on port 3000!'))