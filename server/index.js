const express = require('express');
const http = require("http");
const socketIo = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

io.on("connection", (s) => {
    console.log("Yes i can connect! :)");

    s.on("disconnect", () => {
        console.log("bye :(");
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});