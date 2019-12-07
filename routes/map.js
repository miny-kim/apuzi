var express = require('express');
var router = express.Router();
var database = require("../lib/database");

router.get("/", async function (req, res) {
    const doctors = await database.findMultipleListings("doctors");
    let hospitals = [];
    doctors.forEach(doctor => {
        hospitals.push({
            id:doctor.id,
            title: doctor.hospital_name,
            latlng: doctor.latlng
        })
    })
    res.json(hospitals);
});

router.get("/:idx", async function (req, res) {
    //??    
});

router.post("/:idx", async function (req, res) {
    const data=req.body;
    await database.pushElementInListing("pets",{_id:data._id},{booking_info:{
        test:"test"
    }})
});

module.exports = router;