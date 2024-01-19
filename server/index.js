const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors(
    {
        origin: [""],
        methods: ["POST, GET, PUT, DELETE"],
        credentials: true
    }
))

app.get("/", (req,res) => {
    res.json("Hello");
})

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree", "userFour"] });
});



app.listen(5000, console.log("Server started on PORT 5000"))
