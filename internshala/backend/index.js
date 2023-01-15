const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const { json } = require("express");
const authRoute = require("./routes/auth");

const carRoute = require("./routes/cars");


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://ritesh:ritesh@cluster0.b7tl9ei.mongodb.net/?retryWrites=true&w=majority", () => {
    console.log("DB Connected");
})

app.use("/api/auth", authRoute);
// app.use("/api/cars", carRoute);



app.listen("8000", () => {
    console.log("Server running on 8000");
})