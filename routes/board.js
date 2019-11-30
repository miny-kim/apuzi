var express = require('express');
var router = express.Router();
var database = require("../lib/database");

router.get('/', function(req, res, next) {
    try{
        const boards=database.findMultipleListings("boards");
        res.json(boards);//[{idx,name}] 이라고 하는데 뭔지 모르겠다.
    }catch(e){
        console.log(e);
        res.json({success:false});
    }
});

router.get('/:idx',function(req,res,next){
    try{
        const board= database.findOneListing("boards",{idx:req.params.idx});
        res.json(board);
    }catch(e){
        console.log(e);
        res.json({success:false});
    }
});

module.exports = router;
