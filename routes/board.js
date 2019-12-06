var express = require('express');
var router = express.Router();
var database = require("../lib/database");

router.get('/', async function (req, res) {
    try {
        const boards = await database.findMultipleListings("boards");
        res.json(boards);
    } catch (e) {
        console.log(e);
        res.json({ success: false });
    }
});

router.get("/:idx/p_id",async function(req,res){
    try{
        const p_id=req.params.p_id;
        const boards=await database.findMultipleListings("board"+req.params.idx);
        res.json({
            text:boards.slice((p_id-1)*10,p_id*10),
            text_length:boards.length
        });
    }catch(e){
        res.json({success:false});
    }

});

router.get('/:idx', async function (req, res) {
    try {
        const board = await database.findOneListing("boards", { idx: req.user.idx });
        res.json(board);
    } catch (e) {
        res.json({ success: false });
    }
});

router.post('/register', async function (req, res) {
    try {
        // 어느게시판인지 필요
        const insertedId=await database.pushElementInListing(
            "users",{id:req.user.id},{texts:insertedId}
        );
        
        res.json({ success:true });
    } catch (e) {
        res.json({ success: false });
    }
});


module.exports = router;
