import { Request, Response } from 'express';
import TaskRepository from '../repositories/task-repository'

export default class TaskController {
  async getAll(req: Request, res: Response) {
    const startDate = typeof req.query.startDate === 'string' ? req.query.startDate : '';

    try {
      const tasks = await TaskRepository.getAll({ startDate: startDate });

      res.status(200).send(tasks);
    } catch (err) {
      res.status(500).send({
        message: "Error occurred while retrieving tasks."
      });
    }
  };
}
