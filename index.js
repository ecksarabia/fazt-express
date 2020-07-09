const express = require("express");
const morgan = require("morgan");
const app = express();

function logger(req, res, next) {
    console.log(`Router ${req.protocol}://${req.get("host")}${req.originalUrl}`);
    next();
}

// Settings
app.set("name", "Fazt Express");
app.set("port", 3000);
app.set("view engine", "ejs");

// Middlewares
app.use(express.json());
app.use(logger);
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
    const users = [
        {
            id: "1234"
        },
        {
            id: "0987"
        },
        {
            id: "7654"
        }
    ];
    res.render("index.ejs", {users})
});

app.all("/user", (req, res, next) => {
    console.log("All user paths");
    next();
});

app.get("/user", (req, res) => {
    res.json({
        "id": "007",
        "username": "ecksarabia",
    });
});

app.post("/user/:id", (req, res) => {
    console.log(req.body);
    console.log(req.params);
});

app.delete("/user/:id", (req, res) => {
    res.send(`User ${req.params.id} deleted`);
});

app.put("/user/:id", (req, res) => {
    res.send(`User ${req.params.id} updated`);
});

app.use(express.static("public"))

app.listen(app.get("port"), () => {
    console.log(app.get("name"));
    console.log(`Server on port ${app.get("port")}`)
});