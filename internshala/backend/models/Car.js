const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
    vehiclemodel :{
        type: String,
        required: true
    },
    vehiclenumber: {
        type: String,
        required: true
    },
    seatingcapacity:{
        type: String,
         required: true
    },
    rent:{
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }

}, {timestamps: true})

const Car = mongoose.model("Car", CarSchema);
module.exports = Car;