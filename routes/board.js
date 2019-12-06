var express = require('express');
var router = express.Router();
var database = require("../lib/database");

router.get('/', async function (req, res) {
    try {
        let collections = await database.listCollections();
        let boards=[];
        collections.forEach(collection=>{
            if(collection.name.includes("board")){
                boards.push(collection);
            }
        });
        console.log(boards);
        res.end();
        //res.json(boards);
    } catch (e) {
        console.log(e);
        res.json({ success: false });
    }
});
router.post('/:idx/register', async function (req, res) {
    try {
        const insertedId=await database.createListing("board"+req.params.idx,req.body);
        await database.pushElementInListing(
            "users",{id:req.user.id},{texts:insertedId}
        );
        
        res.json({ success:true });
    } catch (e) {
        res.json({ success: false });
    }
});

router.get("/:idx/:p_id",async function(req,res){
    try{
        
        const p_id=req.params.p_id;
        const boards=await database.findMultipleListings("board"+req.params.idx);
        data={
            text:boards.slice((p_id-1)*10,p_id*10),
            text_length:boards.length
        };
        console.log(data);
        res.json(data);
    }catch(e){
        res.json({success:false});
    }

});

router.get('/:idx', async function (req, res) {
    try {
        const board = await database.findOneListing("board", { idx: req.user.idx });
        res.json(board);
    } catch (e) {
        res.json({ success: false });
    }
});



module.exports = router;
