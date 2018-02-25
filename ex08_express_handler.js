const express = require("express");
const app = express();

app.get("/example/a", (req, res) => {
    res.end("/example/a");
})

app.get("/example/b", (req, res, next) => {
    res.write("1:, ");
    if (req.query.name === "mike") {
        next();
    } else {
        res.end();
    }
}, (req, res, next) => {
    res.write("2:, ");
    next();
}, (req, res) => {
    res.end("3:");
})

let f1 = (req, res, next) => {
    req.pass = "f1";
    next();
}

let f2 = (req, res, next) => {
    req.pass = req.pass + ", f2";
    next();
}

let f3 = (req, res, next) => {
    req.pass = req.pass + ", f3";
    next();
}


app.get("/example/c", f1, f2, f3, (req, res) => {
    res.end(req.pass)
})

const server = app.listen(3000, () => {
    const hostname = server.address().address;
    const port = server.address().port;
    console.log(`server running at ${hostname}:${port}`);
})
