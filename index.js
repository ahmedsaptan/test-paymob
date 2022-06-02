const express= require("express");


const app =  express();

app.use(express.json());

app.post("/v1/api", (req, res) => {
    console.log(res.body);
    res.send({
        success: true
    })
})
app.get("/", (req, res) => {
    res.send({
        success: true,
        message: "API "
    })
})

app.listen(process.env.POST, () => {
    console.log("server is start at:", process.env.POST)
})