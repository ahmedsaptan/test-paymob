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

const PORT = process.env.PORT|| 3000
app.listen(PORT, () => {
    console.log("server is start at: ", PORT)
})