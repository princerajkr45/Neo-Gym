import express from 'express';
import {
    createStaff,
    getAllStaff,
    getStaffById,
    updateStaff,
    deleteStaff,
} from '../controllers/staffController.js';

const staffRouter = express.Router();

// Create a new staff member
staffRouter.post('/', createStaff);

// Get all staff members
staffRouter.get('/', getAllStaff);

// Get a staff member by ID
staffRouter.get('/:id', getStaffById);

// Update a staff member by ID
staffRouter.put('/:id', updateStaff);

// Delete a staff member by ID
staffRouter.delete('/:id', deleteStaff);

export default staffRouter;
