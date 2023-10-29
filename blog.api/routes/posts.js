const router = require ("express").Router();
const { Router } = require("express");
const User = require ("../models/User");
const Post = require ("../models/Post")
const { route } = require("./Auth");


// CREATE POST
router.post("/", async (req,res)=>{
const newPost = new Post(req.body);
        try{
                const savedPost = await newPost.save();
                res.status(200).json(savedPost);
        } catch(err){
                res.status(500).json(err);
            }
    });
  
  
  // UPDATE POST
  router.put("/:id", async (req,res)=>{
        try{
                const post = await find.PostById(req.params.Id);
                if (post.username === req.body.username){
                    try{
                        const updatedPost = await Post.findByIdAndUpdate(
                            req.params.Id
                            {
                                $set:request.body
                        },
                            { new: true }
                        ); 
                        res.status(200).json(updatedPost);
                    }catch(err){
                        res.status(500).json(err);
                    }
                }else{
                    res.status(401).json("You can only update your post!")
            }
        }catch(err){
            res.status(500).json(err);
        }
    })
      
    
    // DELETE POST
    router.delete("/:id", async (req,res)=>{
        try{
                const post = await find.PostById(req.params.Id);
                if (post.username === req.body.username){
                    try{
                        await post.delete();
                        res.status (200).json("Post has been deleted...")
                        
                    }catch(err){
                        res.status(500).json(err);
                    }
                }else{
                    res.status(401).json("You can only delete your post!")
            }
        }catch(err){
            res.status(500).json(err);
        }
    })
      
    


     // GET POST
     
     router.get("/:id", async (req,res)=>{
        try{
                const post = await find.PostById(req.params.Id);
                    res.status(200).json(Post);
                    }catch(err){
                        res.status(500).json(err);
                    }
    })

    //GET ALL POSTS
    router.get("/", async (req,res)=>{
                const username = req.body.user;
                const catName = req.body.catName;
        try{
            let posts;
            if (username) {
            posts = await Post.find ({ username });
            } else if (catName) {
                posts = await Post.find ({
                    categories: {
                        $in = [catName],
                    },
                });
            } else {
                posts = await Post.find();
            }
            res.status(200).json(posts);
        }catch (err){
                res.status(500).json(err);
            }
    });
      
    

    module.exports = router;