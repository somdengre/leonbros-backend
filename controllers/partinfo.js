const autoParts =require("../schema.js");
const express = require('express')
const Features = require("../utils/features.js");


const router = express.Router()

router.get('/getItems', async(req,res) => {
    try {

        
        const resultPerPage = 16;
        const productsCount = await autoParts.countDocuments();
        const apiFeatures = new Features(autoParts.find(), req.query).search();
        
        // const apiFeatures = new Features(autoParts.find(), req.query);
        // const  searchedproducts = apiFeatures.search();
        // console.log(searchedproducts);
        let products = await apiFeatures.query;
        let searchQuery = req.query.keyword;
        let filteredProductsCount = products.length;
        
        apiFeatures.pagination(resultPerPage).search();
        
        products = await apiFeatures.query.clone();
        const re = new RegExp(`.*${searchQuery}.*`);
        console.log("Search query",searchQuery,re)
        const items = await autoParts.find({ oem: { $regex: re, $options: 'i' } });
        console.log(items.length);
        

        res.status(200).json({
            message:"Items found",
            status:true,
            success: true,
            productsCount,
            resultPerPage,
            filteredProductsCount,
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