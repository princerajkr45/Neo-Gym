import mongoose from 'mongoose';

const adminSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: [3, 'Full name must be at least 3 characters long'],
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters long'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'],
    }
}, { timestamps: true });  // Corrected 'timestamps' option

export const Admin = mongoose.model("Admin", adminSchema);
