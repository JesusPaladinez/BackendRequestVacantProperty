const express = require("express");
const router = express.Router();
const requestsModel = require("../models/requestsModel");


router.get("/", async (req, res) => {
     try {
        const requests = await requestsModel.find();
        res.status(200).json(requests);
     } catch (error) {
        res.status(500).json({ message: error })
     } 
})

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const request = await requestsModel.findById(id);
        res.status(200).json(request);
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

router.post("/", async (req, res) => {
    const newRequest = new requestsModel(req.body);
    try {
        const data = await newRequest.save();
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

module.exports = router;