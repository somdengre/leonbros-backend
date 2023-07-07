const autoParts =require("../schema.js");
const express = require('express')


const router = express.Router()

router.get('/getItems', async(req,res) => {
    try {
        const items = await autoParts.find().limit(10);
        console.log(items);

        res.status(200).json({
            message:"Items found",
            status:true,
            data:items
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Some error occured on server",
            status:false,
            data: null
        })
    }
})

module.exports = router;