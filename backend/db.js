// importing .env 
require('dotenv').config();
const mongoose = require("mongoose");
require("zod");
try{
    mongoose.connect(process.env.mongodbUrl);
}
catch(e){
    console.log("error connecting to db")
}
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos",todoSchema)

module.exports = {
    todo: todo
}