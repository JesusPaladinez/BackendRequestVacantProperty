const mongoose = require("mongoose");


const requestsModel = new mongoose.Schema({
    property: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "properties",
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "owners",
        required: true
    },
    cause_vacant_property: {
        type: String,
        required: true
    },
    means_response: {
        type: String,
        required: true
    },
    receipt: {
        type: File,
        required: true
    },  
    data_policy: {
        type: Boolean,
        required: true
    },  
})


module.exports = mongoose.model("requests", requestsModel)