import Member from '../model/Member.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// Helper function to generate JWT token
const generateToken = (user) => {
  return jwt.sign(
    { userId: user._id, role: user.role }, 
    process.env.JWT_SECRET, 
    { expiresIn: process.env.JWT_EXPIRY || '1h' }
  );
};

// Register a new user
export const signup = async (req, res) => {
  const { username, password, fullName, contactNumber, gender, address, role } = req.body;

  try {
    // Check if username already exists
    const userExists = await Member.findOne({ username });
    if (userExists) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new member
    const newMember = new Member({
      username,
      password: hashedPassword,
      fullName,
      contactNumber,
      gender,
      address, 
      status: 'Active',
      role
    });

    await newMember.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user' });
  }
};

// Login user and return a JWT token
export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user by username
    const user = await Member.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = generateToken(user);

    // Respond with token and user details
    res.status(200).json({ token, role: user.role, userId: user._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error during login' });
  }
};
