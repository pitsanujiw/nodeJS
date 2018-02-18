const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: false
}));

app.get("/login", (req, res) => {
    res.end("username: " + req.query.username + ", password: " + req.query.password);
})

app.post("/login", (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json, application: xml" })
    res.end("username: " + req.body.username + ", password: " + req.body.password);
})


const server = app.listen(3000, () => {
    const hostname = server.address().address;
    const port = server.address().port;
    console.log(`server running at ${hostname}:${port}`);
})