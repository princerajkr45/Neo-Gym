// routes/announcementRoutes.js
import express from 'express';
import {
    createAnnouncement,
    getAllAnnouncements,
    deleteAnnouncement,
} from '../controllers/announcementController.js';

const router = express.Router();

// Route to get all announcements
router.get('/', getAllAnnouncements);

// Route to create a new announcement
router.post('/', createAnnouncement);

// Route to delete an announcement by ID
router.delete('/:id', deleteAnnouncement);

export default router;
