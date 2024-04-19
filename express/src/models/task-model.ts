import { RowDataPacket } from "mysql2"

export default interface Task extends RowDataPacket {
  id: number;
  title: string;
  description?: string;
  startTime?: string
  endTime?: string
  status?: string
  priority?: string
  createdAt: string
  lastModifiedAt: string
}
