import mongoose from "mongoose";

// Define the Equipment Schema
const equipmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    amount: {
      type: String, 
      required: true,
    },
    vendor: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    purchasedDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true, 
  }
);


const Equipment = mongoose.model("Equipment", equipmentSchema);
export default Equipment
