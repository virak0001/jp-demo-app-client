export * from './mosaic-layout'
export * from './speaker-view-layout'

export interface VideoLayoutItem {
  x: number
  y: number
  width: number
  height: number
}

export type ICalcLayout<T> = (
  containerWidth: number,
  containerHeight: number,
  numItems: number,
  options?: T
) => VideoLayoutItem[]
