const express = require("express");
const app = express();

app.route("/login")
    .get((req, res) => {
        res.end("get")
    })
    .post((req, res) => {
        res.end("post")
    })
    .put((req, res) => {
        res.end("put")
    })
    .delete((req, res) => {
        res.end("delete")
    })

const server = app.listen(3000, () => {
    const hostname = server.address().address;
    const port = server.address().port;
    console.log(`server running at ${hostname}:${port}`);
})
