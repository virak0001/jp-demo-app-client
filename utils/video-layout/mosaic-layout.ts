import { ICalcLayout, VideoLayoutItem } from '.'

const DefaultMosaicLayoutOptions = {
  gaps: 10,
  itemAspect: 16 / 9,
}

export interface MosaicLayoutOptions {
  gaps?: number
  itemAspect?: number
}

export const calcMosaicLayout: ICalcLayout<MosaicLayoutOptions> = (
  containerWidth: number,
  containerHeight: number,
  numItems: number,
  options?: MosaicLayoutOptions
): VideoLayoutItem[] => {
  const { gaps, itemAspect } = { ...DefaultMosaicLayoutOptions, ...options }

  let cols = 1
  let rows = 1
  while (numItems > cols * rows) {
    if (cols === rows) cols++
    else rows++
  }

  let itemWidth = (containerWidth - gaps) / cols - gaps
  let itemHeight = itemWidth / itemAspect
  if (itemHeight * rows + gaps * (rows + 1) > containerHeight) {
    itemHeight = (containerHeight - gaps) / rows - gaps
    itemWidth = itemHeight * itemAspect
  }

  const offsetTop =
    gaps + (containerHeight - gaps - rows * (itemHeight + gaps)) / 2
  const offsetLeft =
    gaps + (containerWidth - gaps - cols * (itemWidth + gaps)) / 2

  const items: VideoLayoutItem[] = []
  for (let i = 0; i < numItems; i++) {
    const ix = i % cols
    const iy = Math.floor(i / cols)
    const y = iy * (itemHeight + gaps) + offsetTop
    const offset =
      (iy + 1) * cols <= numItems
        ? offsetLeft
        : offsetLeft + ((cols - (numItems % cols)) / 2) * (itemWidth + gaps)
    const x = (ix % cols) * (itemWidth + gaps) + offset
    items.push({
      x,
      y,
      width: itemWidth,
      height: itemHeight,
    })
  }

  return items
}
