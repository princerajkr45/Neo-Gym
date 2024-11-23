import express from "express";
import { getAllEquipment, createEquipment, deleteEquipment, updateEquipment } from "../controllers/equipmentController.js"

const router = express.Router();

// Route to get all equipment
router.get("/", getAllEquipment);

// Route to create new equipment
router.post("/", createEquipment);

// Route to update equipment by ID
router.put("/:id", updateEquipment);

// Route to delete equipment by ID
router.delete("/:id", deleteEquipment);

export default router
