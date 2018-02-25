const express = require("express");
const path = require("path");
const app = express();

app.get("/profile", (req, res) => {
    res.download(path.join(__dirname, "public", "images", "men.jpg"))
})

const server = app.listen(3000, () => {
    const hostname = server.address().address;
    const port = server.address().port;
    console.log(`server running at ${hostname}:${port}`);
})
