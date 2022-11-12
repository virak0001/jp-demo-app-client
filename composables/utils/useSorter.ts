export function useSorter() {
  return {
    sortBy: (array: any[], key: string, direction: 'asc' | 'desc' = 'asc') => {
      return array.sort((a, b) => {
        if (a[key] < b[key]) {
          return direction === 'asc' ? -1 : 1
        }
        if (a[key] > b[key]) {
          return direction === 'asc' ? 1 : -1
        }
        return 0
      })
    },
  }
}
