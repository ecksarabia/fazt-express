const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Server on port 3000")
});

app.get("/", (req, res) => {
    res.send("hello world!")
});

app.get("/user", (req, res) => {
    res.json({
        "id": "007",
        "username": "ecksarabia",
    })
});

app.post("/user/:id", (req, res) => {
    console.log(req.body)
    console.log(req.params)
    res.send("post user method")
});
