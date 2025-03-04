import { promises as fs } from 'fs';
import { Task } from '../models/task';

const FILE_PATH = './tasks.json';

export const readTasks = async (): Promise<Task[]> => {
  try {
    const data = await fs.readFile(FILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
};

export const writeTasks = async (tasks: Task[]): Promise<void> => {
  await fs.writeFile(FILE_PATH, JSON.stringify(tasks, null, 2), 'utf-8');
};
