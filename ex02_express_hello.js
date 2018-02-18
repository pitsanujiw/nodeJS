const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("root");
});


app.get("/profile", (req, res) => {
    res.end("mike");
});

app.post("/profile", (req, res) => {
    res.json({ "name": "post mike" });
});

app.delete("/profile", (req, res) => {
    res.json({ "name": "delete mike" });
});


const server = app.listen(3000, () => {
    const hostname = server.address().address;
    const port = server.address().port;
    console.log(`server running at ${hostname}:${port}`);
})