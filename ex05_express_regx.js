const express = require("express");
const app = express();

// fixed path
app.get("/api/add", (req, res) => {
    res.end("fixed path");
})

// ? = optional
app.get("/appl?e", (req, res) => {
    res.end("option path");
})

// + = same
app.get("/abz+c?", (req, res) => {
    res.end("same path")
})

// * = any
app.get("/ab*cd?", (req, res) => {
    res.end("any path");
})


const server = app.listen(3000, () => {
    const hostname = server.address().address;
    const port = server.address().port;
    console.log(`server running at ${hostname}:${port}`);
})
