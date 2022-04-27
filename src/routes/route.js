const express = require('express');
const router = express.Router();

const cowinController=require("../controller/cowinController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
});

router.get("/getVaccine", cowinController.getVaccinationByDistrict);
router.get("/getSortedCities", cowinController.getSortedCities);
router.post("/createMemes",cowinController.createMemes)

module.exports = router;