import mongoose from "mongoose";

const announcementSchema = mongoose.Schema({
    message: {
        type: String,
        trim: true,
        required: true,
        maxlength: 500,
    },
    appliedDate: {
        type: Date,
        required: true,
        default: Date.now, 
    },
}, { timestamps: true });


const Announcement = mongoose.model('Announcement', announcementSchema);

export default Announcement;
