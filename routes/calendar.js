var express = require('express');
var ObjectId=require("mongodb").ObjectId;
var router = express.Router();
var database = require("../lib/database");

router.get('/',async function (req,res){
    try{
        const user = await database.findOneListing("users",{id:req.user.id});
        
        res.json(user.calendarList);
    }catch(e){
        res.json({success:false});
    }
});

router.post('/',async function (req,res){
    try{
        const insertedId=await database.createListing("calendars",req.body);
        console.log(req.body);
        await database.pushElementInListing("users",
            {id:req.user.id},{calendarList:insertedId});
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
            {calendarList:new ObjectId(req.params.id)}
            );
    }catch(e){
        res.json({success:false});
    }

});

module.exports=router;