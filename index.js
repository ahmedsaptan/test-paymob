const express= require("express");


const app =  express();

app.use(express.json());

app.post("/v1/api", (req, res) => {


    const rand = Math.random()

    console.log({
        body: req.body
    })
})
app.get("/v1/api", (req, res) => {
    if(rand > 0.5) {
        res.send({
            success: true,
            query: req.query
        })
    } else {
        res.status(401).send({
            success: false,
            query: req.query
        })
    }
})
app.get("/", (req, res) => {
    res.send({
        success: true,
        message: "API "
    })
})

const PORT = process.env.PORT|| 3000
app.listen(PORT, () => {
    console.log("server is start at: ", PORT)
})