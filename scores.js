const jsonBody = require("body/json");
var scores = [{name: "Edwin", score: 50}, {name: "David", score: 39}];
const textBody = require("body");
const http = require('http');
const hostname = '';
const port = 3000;
const server = http.createServer((req, res) => { 
    var body;
    
    if (req.method === "GET") {
        if (req.url !== "/scores") {
            res.statusCode = 404;
            
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            scores.sort((a,b) => (b.score -a.score));
            scores = scores.splice(0, 3);
            body = JSON.stringify(scores);
            
        }
    } else if (req.method === "PUT") {
        res.statusCode = 201;
        textBody(req, res, (err, body) => {
            scores.push(body);
        })
    }
    else if (req.method === "POST") {
        res.statusCode = 201;
        jsonBody(req, res, (err, body) => {
            scores.push(body);
        })
    }
    res.end(body);
    
    console.log(
        /* define stringify */
        JSON.stringify(scores)
    );
    // console.log(this.getResponseHeader('content-type'));
    console.log(req.headers);
    console.log(req.method);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


scores.sort(function(a,b) {return (a.score > b.score) ? 1 : ((b.score > a.score) ? 1 : 0);} ); 



