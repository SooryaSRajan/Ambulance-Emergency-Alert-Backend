const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080
const GenerateBcrypt = require("./routes/GenerateBcrypt");
const GenerateJWT = require("./routes/GenerateJWT");
const receiveCoordinatesRoute = require("./routes/ReceiveCoordinatesRoute");

const middlewareToken = require("./middleware/ValidateToken");

require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get("/", (req, res) => {
    res.send("Server root node");
});

app.use("/bcrypt", GenerateBcrypt);
app.use("/get_jwt", GenerateJWT)
app.use("/coordinates", middlewareToken, receiveCoordinatesRoute)

app.listen(PORT, () => {
    console.log('Server on port: ' + PORT)
})