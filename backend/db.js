const mongoose = require("mongoose");
const{ todoSchema } = require("./types");
const { boolean } = require("zod");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos",todoSchema)

module.export = {
    todo
}