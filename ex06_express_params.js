const express = require("express");
const app = express();

app.get("/username/:username/password/:password", (req, res) => {
    res.json({ "username": req.params.username, "password": req.params.password });
})

app.get("/tarvel/:from-:to", (req, res) => {
    res.send({ "from": req.params.from, "to": req.params.to });
})


const server = app.listen(3000, () => {
    const hostname = server.address().address;
    const port = server.address().port;
    console.log(`server running at ${hostname}:${port}`);
})
