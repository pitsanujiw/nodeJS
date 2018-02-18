const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.get("/", (req, res) => {
    res.end("Hi");
})

app.all("/login/*", (req, res, next) => {
    console.log("logging...")
    if (req.query.username == "sittikiat" && req.query.password == "7856ek31") {
        next();
    } else {
        res.end("Please login")
    }
});

app.get("/login/profile", (req, res) => {
    res.end("profile")
})




const server = app.listen(3000, () => {
    const hostname = server.address().address;
    const port = server.address().port;
    console.log(`server running at ${hostname}:${port}`);
})
