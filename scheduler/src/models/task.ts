export interface Task {
  id: number
  title: string
  description?: string
  startTime?: string
  endTime?: string
  status?: string
  priority?: string
  createdAt: string
  lastModifiedAt: string
}
