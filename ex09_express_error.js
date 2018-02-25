const express = require("express");
const app = express();

app.get("/profile", (req, res) => {
    res.send("profile");
})

// ไม่ต้องระบบ static file เพราะมันเป็น handle error
app.use("*", (req, res, err) => {
    res.sendFile(__dirname + "/handleError/404.html")
})

const server = app.listen(3000, () => {
    const hostname = server.address().address;
    const port = server.address().port;
    console.log(`server running at ${hostname}:${port}`);
})
