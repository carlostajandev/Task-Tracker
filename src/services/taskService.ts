import { randomUUID } from 'crypto';
import { Task } from '../models/task';
import { readTasks, writeTasks } from '../utils/fileService';

export const getTasks = async (): Promise<Task[]> => {
  return await readTasks();
};

export const addTask = async (description: string): Promise<Task> => {
  const tasks = await readTasks();
  const newTask: Task = {
    id: randomUUID(),
    description,
    status: 'todo',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  tasks.push(newTask);
  await writeTasks(tasks);
  return newTask;
};
