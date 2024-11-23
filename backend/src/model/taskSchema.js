import mongoose from "mongoose";
// Define the Task Schema
const taskSchema = new mongoose.Schema(
  {
    taskDesc: {
      type: String,
      required: [true, 'Task description is required'],
      minlength: [5, 'Task description must be at least 5 characters long'],
      trim: true,
    },
    taskStatus: {
      type: String,
      enum: ['In Progress', 'Pending'],
      required: [true, 'Task status is required'],
      default: 'Pending',
    },

  },
  {
    timestamps: true,
  }
);

// Create and export the Task model
const Task = mongoose.model('Task', taskSchema);
export default Task;
