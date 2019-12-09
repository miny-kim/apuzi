var express = require('express');
var router = express.Router();
var database = require("../lib/database");
var ObjectId=require("mongodb").ObjectId;

router.get("/", async function (req, res) {
    try{
        const hospitals = await database.findMultipleListings("hospitals");
        res.json(hospitals);
        
    }catch(e){
        console.error(e);
        res.json({success:false});
    }
});

router.get("/:idx", async function (req, res) {
    //??    
    
});

router.post("/book", async function (req, res) {
    try{
        const data=req.body;
        const insertedId=await database.createListing("calendars",data.calendar);
        await database.pushElementInListing("pets",{_id:new ObjectId(data.pet_id)},{
            calendar_list:insertedId
        });
        await database.pushElementInListing("hospitals",{_id:data.hospital_id},{calendars:data.calendar});
        res.json({success:true});
    }
    catch(e){
        res.json({success:false});
    }
});

module.exports = router;