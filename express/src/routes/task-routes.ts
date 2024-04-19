import { Router } from "express";
import TaskController from "../controllers/task-controller";

class TaskRoutes {
  router = Router();
  controller = new TaskController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get("/", this.controller.getAll);
  }
}

export default new TaskRoutes().router;
