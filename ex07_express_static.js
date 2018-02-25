const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));


const server = app.listen(3000, () => {
    const hostname = server.address().address;
    const port = server.address().port;
    console.log(`server running at ${hostname}:${port}`);
})
