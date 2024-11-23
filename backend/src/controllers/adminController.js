import { Admin } from '../model/adminModel.js';

// Create a new admin (register)
export const createAdmin = async (req, res) => {
    const { fullname, email, password } = req.body;

    // Basic validation for required fields
    if (!fullname || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Check if the email already exists
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Admin with this email already exists' });
        }

        // Create new admin
        const newAdmin = new Admin({
            fullname,
            email,
            password,  // No password hashing in this case (just stored as is)
        });

        await newAdmin.save();

        res.status(201).json({
            message: 'Admin created successfully',
            admin: {
                id: newAdmin._id,
                fullname: newAdmin.fullname,
                email: newAdmin.email,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Login admin (no password hashing, just a simple match)
export const loginAdmin = async (req, res) => {
    const { email, password } = req.body;

    // Validate request data
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        // Find admin by email
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        // Check if the provided password matches the stored password
        if (admin.password !== password) {  // No hashing, plain text comparison
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Login successful
        res.status(200).json({
            message: 'Login successful',
            admin: {
                id: admin._id,
                fullname: admin.fullname,
                email: admin.email,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
