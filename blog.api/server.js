const express = require ("express");
const server = express();
PORT = 4400;

const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
server.use(express.json())
const authRoute = require ("../models/auth")
const userRoute = require ("../models/users")
const postRoute = require ("../models/posts")
const categoryRoute = require ("../models/categories")
const jwt = require ("jsonwebtoken")



mongoose
.connect(process.env.MONGODB_URL).then(console.log(`connected to MongoDB`))
.catch((err)=>console.log(err));



server.use("./api/auth", authRoute);
server.use("./api/users", userRoute);
server.use("./api/posts", postRoute);
server.use("./api/categories", postCategory)

server.listen (PORT, () => {
    console.log(`Backend server is running at http://localhost:${PORT}`)
}) 

