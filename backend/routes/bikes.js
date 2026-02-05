import express from "express";
import Bike from "../models/Bike.js";

const router = express.Router();

// GET all bikes
router.get("/", async (req, res) => {
  try {
    const bikes = await Bike.find().sort({ createdAt: -1 });
    res.json(bikes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch bikes" });
  }
});

// GET single bike by slug
router.get("/:slug", async (req, res) => {
  try {
    const bike = await Bike.findOne({ slug: req.params.slug });
    if (!bike) return res.status(404).json({ error: "Bike not found" });
    res.json(bike);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch bike" });
  }
});

// POST create bike
router.post("/", async (req, res) => {
  try {
    const newBike = await Bike.create(req.body);
    res.status(201).json(newBike);
  } catch (err) {
    res.status(400).json({ error: "Failed to create bike" });
  }
});

export default router;
