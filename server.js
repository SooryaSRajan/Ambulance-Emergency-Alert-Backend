const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const GenerateBcrypt = require("./routes/GenerateBcrypt");
const GenerateJWT = require("./routes/GenerateJWT");
const receiveCoordinatesRoute = require("./routes/ReceiveCoordinatesRoute");
const middlewareToken = require("./middleware/ValidateToken");
const socket = require('./modules/SocketIO');

require('dotenv').config();

const PORT = process.env.PORT || 8080

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get("/", (req, res) => {
    res.send("Server root node");
});

app.get("/test", (req, res) => {
  res.sendFile(__dirname  + '/index.html');
});

app.use("/bcrypt", GenerateBcrypt); //TODO: Remove in deployment stage 
app.use("/get_jwt", GenerateJWT)
app.use("/coordinates", middlewareToken, receiveCoordinatesRoute)

socket.socketConnection(server)
server.listen(PORT, () => {
    console.log('Server on port: ' + PORT)
})