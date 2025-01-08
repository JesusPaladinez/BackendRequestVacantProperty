const express = require("express"); 
const router = express.Router();
const ownersModel = require("../models/ownersModel");


router.get("/", async (req, res) => {
    try {
        const owners = await ownersModel.find();
        res.status(200).json(owners)
    } catch (error) {
        res.status(500).json({ message: error });
    }
})

router.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const owner = new ownersModel.findById(id);
        if (owner) {
            res.status(200).json(owner);
        } else {
            res.status(404).json({ message: "El propietario no fue encontrado." });
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
})

module.exports = router;
