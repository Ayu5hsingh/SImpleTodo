require('dotenv').config()
const express = require("express");
const { todoValidator, updateTodoValidator } = require("./types");
const { todo } = require("./db");
const app = express();

app.use(express.json())

app.post("/todos", async (req, res) => {
    const createPayLoad = req.body;
    const parsedPayLoad = todoValidator.safeParse(createPayLoad);
    if (!parsedPayLoad.success) {
        res.status(411).json(
            {
                msg: "You have sent wrong input"
            }
        )
        return
    }
// putting todos in db
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
    })
    res.json({
        msg: "Todo created"
    })
})


app.get("/todos", async (req, res) => {
    const data = await todo.find({});
    res.json(data);
})



app.put("/completed", async (req, res) => {
    const updatedPayLoad = req.body;
    const parsedPayLoad = updateTodoValidator.safeParse(updatedPayLoad);
    if (!parsedPayLoad.success) {
        res.status(411).json({
            msg: " You have sent the wrong input"
        })
        return
    }
    await todo.update({
        _id: req.body.id,
        completed: false
    }, {
        completed: true
    })
})

app.get('*', (req, res) => {
    res.status(400).json(
        {
            msg: "404 Page not found"
        }
    )
})


app.listen(process.env.PORT, () => {
    console.log("server is up and running on ", process.env.PORT);
})