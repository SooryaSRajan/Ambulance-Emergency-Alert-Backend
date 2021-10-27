const Express = require("express");
const router = Express.Router();

router.post("/", (req, res) => {
    

    latitude = req.body.latitude;
    longitude = req.body.latitude;

    console.log(latitude, longitude)

    res.send('Success') 


});

module.exports = router;