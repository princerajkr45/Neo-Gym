import express from 'express';
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from '../controllers/taskController.js';

const router = express.Router();

// Define routes for tasks
router.post('/', createTask); // Create a task
router.get('/', getTasks); // Get all tasks
router.get('/:id', getTaskById); // Get a task by ID
router.put('/:id', updateTask); // Update a task by ID
router.delete('/:id', deleteTask); // Delete a task by ID

export default router;
