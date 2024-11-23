import mongoose from 'mongoose';

// Reference the Member schema to associate payments with a specific member
const paymentSchema = new mongoose.Schema(
  {
    member: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Member', 
      required: true,
    },
    amountPaid: {
      type: Number,
      required: true,
    },
    paymentDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    chosenService: {
      type: String,
      enum: ['Fitness', 'Sauna', 'Cardio'],
      required: true,
    },
    plan: {
      type: String,
      enum: ['premium', 'standard', 'basic'],
      required: true,
    },
    reminderSent: {
      type: Boolean,
      default: false, // Set to true once reminder is sent
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt automatically
);

const Payment = mongoose.model('Payment', paymentSchema);
export default Payment;
