const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors")

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(cors())

app.post("/stop", (req, res) => {
    console.log(req.body.url);
    axios.get(req.body.url)
        .then(response => {
            return res.json(response.data);
        })
})

app.listen(3000, () => {
    console.log("Server is running!");
})