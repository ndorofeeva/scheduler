import connection from '../db';
import Task from '../models/task-model';
import moment from 'moment'

interface ITaskRepository {
  getAll(searchParams: {startDate?: string}): Promise<Task[]>;
}

class TaskRepository implements ITaskRepository {
  getAll(searchParams: {startDate?: string}): Promise<Task[]> {
    let query: string = 'SELECT * FROM task';

    if(searchParams.startDate) {
      const startDateFormatted = moment(searchParams.startDate).format('YYYY-MM-DD');
      query = `${query} WHERE DATE(StartTime) = '${startDateFormatted}'`;
    }

    return new Promise((resolve, reject) => {
      connection.query<Task[]>(query, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  }
}

export default new TaskRepository();
