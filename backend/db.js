// importing .env 
require('dotenv').config();
const mongoose = require("mongoose");
const { boolean } = require("zod");

mongoose.connect(process.env.mongodbUrl);
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos",todoSchema)

module.exports = {
    todo: todo
}