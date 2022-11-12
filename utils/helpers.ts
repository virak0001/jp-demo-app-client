export const byUid: any = (array: any[], uid: string) => {
  return array.find((item) => item.uid === uid)
}

export class Queue {
  tasks = [] as { fn: Function; resolve: any }[]
  executing = false

  next = async () => {
    const task = this.tasks.shift()
    if (!task) {
      this.executing = false
      return
    }
    const { resolve, fn } = task
    try {
      resolve(await fn())
    } catch (e) {
      resolve(null)
    }
    if (!this.tasks.length) this.executing = false
  }

  add = (fn: Function, resolve: any) => {
    this.tasks.push({ fn, resolve })
    if (!this.executing) this.startExecution()
  }

  startExecution = () => {
    this.executing = true
    const that = this
    ;(async function () {
      while (that.executing) {
        await that.next()
      }
    })()
  }

  clear = () => {
    this.tasks.forEach((task: any) => task.resolve(null))
    this.tasks = []
    this.executing = false
  }
}
