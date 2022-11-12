export interface User {
  id: string
  name: string
}

export interface Event {
  id: string
  name: string
  startAt: string
  endAt: string
  completed: 0 | 1
  host: { id: string; name: string }
  hostedBy?: User | string
}
