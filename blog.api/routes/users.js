const router = require ("express").Router();
const { Router } = require("express");
const User = require ("../models/User");
const Post = require ("../models/Post")
const bcrypt = require("bcrypt");
const { findByIdAndDelete } = require("../models/User");
const { route } = require("./Auth");


// TO UPDATE
router.put ("/:id", async (req,res)=>{
  if (req.body.userId === req.params.id){
    if(req.body.password){
        const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash (req.body.password, salt);
                }
        try{ 
            const updatedUser = await User.FindByIdAndUpdate (req.params.id, {
                $set: req,body,
                }, 
                { new: true });
                res.status(200).json(updatedUser);
            } 
        catch (err){
                res.status(500).json(err);
                    }  
        } else {res.status(401).json("You can only update your account!");
                }
    }); 


// TO DELETE
router.delete ("/:id", async (req,res)=>{
    if (req.body.userId === req.params.id){
        
        try {
                    const User = user.findById (req.params.id); 
            
                try { 

                    await Post.deleteMany ({user: username.user})  
                    await findByIdAndDelete(req.params.id)
                        res.status(200).json("User has been deleted...");
                    } 
                catch (err){
                        res.status(500).json(err);
                            }  
        } catch (err) { 
            res.status(404).json("User not found!")
        }
                } else {res.status(401).json("You can only delete your account!");
                }
    }); 
  

   // TO GET USER
   router.get ("/:id", async (req,res)=>{
          try{
                const user = await User.findById(req.params.id);
                const { password, ...others } = user._doc
                res.status(200).json(others); 
            }catch (err){
                res.status(500).json(err);
              }

   })