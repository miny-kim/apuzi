var express = require('express');
var ObjectId=require("mongodb").ObjectId;
var router = express.Router();
var database = require("../lib/database");

router.get('/',async function (req,res){
    try{
        const user = await database.findListing("users",{id:req.user.id});
        let calendarList=[];
        for(cal_id of user.calendar_list){
            let cal=await database.findOneListing("calendars",{_id:cal_id});
            calendarList.push(cal);
        }
        for(pet_id of user.pet_list){
            let pet=await database.findOneListing("pets",{_id:pet_id});
            let cal=await database.findOneListing("calendars",{_id:pet._id});
            calendarList.push(cal);
        }
        console.log(calendarList);
        res.json(calendarList);
    }catch(e){
        res.json({success:false});
    }
});

router.post('/',async function (req,res){
    try{
        const insertedId=await database.createListing("calendars",req.body);
        await database.pushElementInListing("users",
            {id:req.user.id},{calendar_list:insertedId});
        res.json({success:true});
    }catch(e){
        res.json({success:false});
    }
    
});

router.put('/:id',async function (req,res){
    try{
        await database.updateListing("calenadars",
            {_id:req.body._id},req.body);
        res.json({success:true});    
    }catch(e){
        res.json({success:false});
    }
});

router.delete('/:id',async function (req,res){ // id!!!=ObjectId
    try{
        await database.deleteListing("calendars",{_id:req.body._id});
        await database.pullElementInListing("users",
            {id:req.user.id},
            {calendar_list:new ObjectId(req.params.id)}
            );
    }catch(e){
        res.json({success:false});
    }

});

module.exports=router;