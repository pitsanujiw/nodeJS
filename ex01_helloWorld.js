const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("ok");
}).listen(3000);

console.log("server running at http://localhost:3000");