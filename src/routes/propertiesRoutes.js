const express = require("express");
const router = express.Router();
const propertiesModel = require("../models/propertiesModel");


router.get("/", async (req, res) => {
    try {
        const properties = await propertiesModel.find();
        res.status(200).json(properties);
    } catch (error) {
        res.status(500).json({ message: error });
    }
})

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const property = await propertiesModel.findById(id);
        if (property) {
            res.status(200).json(property);
        } else {
            res.status(404).json({ message: "El predio no fue encontrado." });
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
})

module.exports = router;