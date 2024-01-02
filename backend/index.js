const express = require("express");
const bodyParser = require("body-parser");
const { todoValidator, updateTodoValidator } = require("./types");


app.use(express)
app.use(express.json)
app.use(bodyParser)

app.post("/todos", (req, res) => {
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
})


app.get("/todos", (req, res) => {

})



app.put("/completed", (req, res) => {
    const updatedPayLoad = req.body;
    const parsedPayLoad = updateTodoValidator.safeParse(updatedPayLoad);
    if (!parsedPayLoad.success) {
        res.status(411).json({
            msg: " You have sent the wrong input"
        })
        return
    }
})

app.get('*', (req, res) => {
    res.status(400).json(
        {
            msg: "404 Page not found"
        }
    )
})

