// controllers/announcementController.js
import Announcement from '../model/Announcement.js';

// Create a new Announcement
export const createAnnouncement = async (req, res) => {
    try {
        const { message, appliedDate } = req.body;
        
        const newAnnouncement = new Announcement({ message, appliedDate });

        await newAnnouncement.save();
        
        res.status(201).json({
            success: true,
            message: 'Announcement created successfully',
            data: newAnnouncement,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message,
        });
    }
};

// Get all Announcements
export const getAllAnnouncements = async (req, res) => {
    try {
        const announcements = await Announcement.find().sort({ appliedDate: -1 });
        
        res.status(200).json({
            success: true,
            data: announcements,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message,
        });
    }
};

// // Get a single Announcement by ID
// export const getAnnouncementById = async (req, res) => {
//     try {
//         const announcement = await Announcement.findById(req.params.id);
        
//         if (!announcement) {
//             return res.status(404).json({
//                 success: false,
//                 message: 'Announcement not found',
//             });
//         }

//         res.status(200).json({
//             success: true,
//             data: announcement,
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             success: false,
//             message: 'Server Error',
//             error: error.message,
//         });
//     }
// };

// // Update an Announcement by ID
// export const updateAnnouncement = async (req, res) => {
//     try {
//         const updatedAnnouncement = await Announcement.findByIdAndUpdate(
//             req.params.id,
//             { $set: req.body },
//             { new: true }
//         );
        
//         if (!updatedAnnouncement) {
//             return res.status(404).json({
//                 success: false,
//                 message: 'Announcement not found',
//             });
//         }

//         res.status(200).json({
//             success: true,
//             message: 'Announcement updated successfully',
//             data: updatedAnnouncement,
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             success: false,
//             message: 'Server Error',
//             error: error.message,
//         });
//     }
// };

// Delete an Announcement by ID
export const deleteAnnouncement = async (req, res) => {
    try {
        const deletedAnnouncement = await Announcement.findByIdAndDelete(req.params.id);
        
        if (!deletedAnnouncement) {
            return res.status(404).json({
                success: false,
                message: 'Announcement not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Announcement deleted successfully',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message,
        });
    }
};
