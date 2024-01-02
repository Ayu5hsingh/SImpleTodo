const express = require("express");
const bodyParser = require("body-parser");
const { todoValidator, updateTodoValidator } = require("./types");
const { todo } = require("./db");

app.use(express)
app.use(express.json)
app.use(bodyParser)

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
    // put something in mongodb
    await todo.create.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    })
    res.json({
        msg: "Todo created"
    })
})


app.get("/todos", async (req, res) => {
    const data = await todo.find({});
    res.json(data);
})



app.put("/completed", async(req, res) => {
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
        completed: falsegit 
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

