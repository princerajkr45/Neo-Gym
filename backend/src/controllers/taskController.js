import Task from "../model/taskSchema.js";

// Create a new task
export const createTask = async (req, res) => {
  try {
    const { taskDesc, taskStatus } = req.body;

    if (!taskDesc || !taskStatus) {
      return res.status(400).json({ message: 'Both task description and status are required.' });
    }

    const newTask = new Task({
      taskDesc,
      taskStatus,
    });

    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create task', error: error.message });
  }
};

// Get all tasks
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch tasks', error: error.message });
  }
};

// Get a single task by ID
export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch task', error: error.message });
  }
};

// Update a task by ID
export const updateTask = async (req, res) => {
  try {
    const { taskDesc, taskStatus } = req.body;

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { taskDesc, taskStatus },
      { new: true } // This option returns the updated document
    );

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update task', error: error.message });
  }
};

// Delete a task by ID
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete task', error: error.message });
  }
};
