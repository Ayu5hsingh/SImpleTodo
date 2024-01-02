const express = require("express");
const bodyParser = require("body-parser");
const { todoSchema } = require("./types");


app.use(express)
app.use(express.json)
app.use(bodyParser)

app.post("/todos", (req, res) => {
    const createPayLoad = req.body;
    const parsedPayLoad = todoSchema.safeParse(createPayload)
    if (!parsedPayLoad) {
        res.status(411).json(
            {
                msg: "You have sent wrong input"
            }
        )
        return
    }

})


app.get("/todos", (req, res) => {

})



app.put("/todos", (req, res) => {

})

app.get('*', (req, res) => {
    res.status(400).json(
        {
            msg: "404 Page not found"
        }
    )
})

