const router = require ("express").Router();
const Category = require("../models/Category");
const category = require ("../models/Category")

router.post("/", async(req,res)=>{
    const newCat = new Category(req.body);
        try{
                const savedCat = await newCat.save()
                    res.status(200).json;

             }catch(err){
                res.status(500).json(err)
             }
})

router.get("/", async(req,res)=>{
    const newCat = new Category(req.body);
        try{
                const savedCat = await newCat.save()
                    res.status(200).json(cats);
                     
             }catch(err){
                res.status(500).json(err)
             }
})