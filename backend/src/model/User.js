import mongoose from 'mongoose';
const addressSchema = new mongoose.Schema({
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
}, { _id: false }); // Prevent creating an _id for subdocuments


// User schema definition
const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'customer'],
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true,
  },
  address: {
    type: addressSchema,
    required: true,
  },
  // This will hold the reference to the Member document (created later)
  memberDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',
    required: false, // Not required during initial user registration
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema)

export default User;

