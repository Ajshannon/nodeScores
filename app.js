const express = require('express');
const app = express();
const jsonBody = require('body/json');
const port = 3000;

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
  scores.sort((a, b) => (b.score - a.score));
  scores = scores.splice(0, 3);
  res.send(scores);
});

app.post('/scores',(req, res) => {
  res.statusCode = 201;
  jsonBody(req, res, (err, body) => {
      scores.push(body);
  })
});

app.listen(port, () => console.log('Example app listening on port 3000!'))
