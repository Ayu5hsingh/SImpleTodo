const zod = require("zod");

const todoValidator = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodoValidator = zod.object({
    id: zod.string() 
})


module.exports = {
    todoValidator: todoValidator,
    updateTodoValidator: updateTodoValidator
}