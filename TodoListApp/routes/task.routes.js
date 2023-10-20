// routes/task.routes.js
import express from 'express';
import Task from '../model/task.model.js';

const router = express.Router();

// GET all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST to create a new task
router.post('/', async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    const newTask = new Task({ title, description, completed });
  
    await newTask.save();
    res.status(201).json({ message: 'Task added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while adding the task' });
  }
});

// GET a task by ID
router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      res.status(404).json({ error: 'Task not found' });
    } else {
      res.json(task);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT (update) a task by ID
router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      res.status(404).json({ error: 'Task not found' });
    } else {
      task.title = req.body.title;
      task.description = req.body.description;
      task.completed = req.body.completed;
      await task.save();
      res.json({ message: 'Task successfully updated' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE a task by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      res.status(404).json({ error: 'Task not found' });
    } else {
      res.json({ message: 'Task deleted' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
