import type Task from "./task";

export default interface Calendar {
  month: number;
  year: number;
  tasks: Task[];
}
