const mongoose = require("mongoose");


const ownersSchema = new mongoose.Schema({
    property: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "properties",
        required: true
    },
    full_name: {
        type: String,
        required: true
    },
    identification: {
        type: String,
        required: true
    },
    cell_phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model("owners", ownersSchema)