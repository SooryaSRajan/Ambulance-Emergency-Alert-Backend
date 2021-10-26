const Express = require('express');
const app = Express();
const PORT = process.env.PORT || 8080

app.get("/", (req, res) => {
    res.send("Server root node");
});

app.listen(PORT, () => {
    console.log('Server on port: ' + PORT)
})