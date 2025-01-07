const mongoose = require('mongoose');


const propertiesSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    neiborhood: {
        type: String,
        required: true
    },
    number_plate: {
        type: String,
        required: true
    },
    subscriber: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model("properties", propertiesSchema)