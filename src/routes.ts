import express from 'express';
import { getAllTasks, createTask } from './controllers/taskController';

const router = express.Router();

router.get('/tasks', getAllTasks);
router.post('/tasks', createTask);

export default router;
