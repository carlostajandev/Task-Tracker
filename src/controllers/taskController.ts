import { Request, Response } from 'express';
import * as taskService from '../services/taskService';

export const getAllTasks = async (_req: Request, res: Response) => {
  const tasks = await taskService.getTasks();
  res.json(tasks);
};

export const createTask = async (req: Request, res: Response) => {
  const { description } = req.body;
  const task = await taskService.addTask(description);
  res.status(201).json(task);
};
