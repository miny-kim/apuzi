var express = require('express');
var router = express.Router();
var database = require("../lib/database");

router.get('/', async function (req, res) {
    try {
        /*let collections = await database.listCollections();
        let boards=[];
        collections.forEach(collection=>{
            if(collection.name.includes("board")){
                if(collection.name!=="boardName"){
                    boards.push(collection);
                }
            }
        });*/
        const names=await database.findMultipleListings("boardName");
        names.forEach(name=>{
            delete name._id;
        });
        res.json(names);
    } catch (e) {
        console.log(e);
        res.json({ success: false });
    }
});
router.post('/:idx/register', async function (req, res) {
    try {
        let data=req.body;
        let idx=await database.findOneListing("boardName",{idx:req.params.idx}).number;
        await database.upsertListing("boardName",{number:idx+1});
        data.idx=idx+1;
        data.writer=req.user.nickname;
        data.view=0;
        data.like=0;
        data.time=new Date(Date.now());
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
        console.error(e);
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
