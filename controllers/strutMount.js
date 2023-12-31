const strutMount =require("../schemas/strut.js");
const express = require('express')
const Features = require("../utils/features.js");


const router = express.Router()

router.get('/getItems/strutMount', async(req,res) => {
    console.log("hello");
    try {
        const resultPerPage = 16;
        const productsCount = await strutMount.countDocuments();
        const apiFeatures = new Features(strutMount.find(), req.query).search();
        
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
        const items = await strutMount.find({ oem: { $regex: re, $options: 'i' } });
        console.log(items.length, products.length);

        const result = searchQuery ? items : products
        

        res.status(200).json({
            message:"Items found",
            status:true,
            success: true,
            productsCount,
            resultPerPage,
            filteredProductsCount,
            data:result
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