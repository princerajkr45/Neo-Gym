import express from 'express';
import { createAdmin, loginAdmin } from '../controllers/adminController.js';

const router = express.Router();

// Route to create a new admin
router.post('/register', createAdmin);

// Route for admin login
router.post('/login', loginAdmin);

export default router;
