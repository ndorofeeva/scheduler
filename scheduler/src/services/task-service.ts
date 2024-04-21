import http from './api'

class TaskService {
  getAll(): Promise<any> {
    return http.get("/api/tasks");
  }

  getByStartDate(startDate: string): Promise<any> {
    return http.get(`/api/tasks?startDate=${startDate}`);
  }
}

export default new TaskService();
