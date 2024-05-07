export default interface Task {
  id: number
  title: string
  description?: string
  startTime?: string
  endTime?: string
  status?: number
  priority?: number
  createdAt: string
  lastModifiedAt: string
}

export enum TaskPriorities {
  'Lowest' = 10,
  'Low' = 20,
  'Medium' = 30,
  'High' = 40,
  'Critical' = 50,
}

export enum Status {
  'Pending' = 10,
  'In progress' = 20,
  'Done' = 30,
}
