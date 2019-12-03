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

router.get('/:idx', async function (req, res) {
    try {
        const board = await database.findOneListing("boards", { idx: req.user.idx });
        res.json(board);
    } catch (e) {
        res.json({ success: false });
    }
});

router.get('/register', async function (req, res) {
    try {
        await database.createListing() //????
        res.json({ success:true });
    } catch (e) {
        res.json({ success: false });
    }
});


module.exports = router;
