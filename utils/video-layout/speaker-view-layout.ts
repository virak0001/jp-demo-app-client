import { ICalcLayout, VideoLayoutItem } from '.'

const DefaultSpeakerViewLayoutOptions = {
  gaps: 10,
  itemAspect: 16 / 9,
  maxSmallItems: 5,
}

export interface SpeakerViewLayoutOptions {
  gaps?: number
  itemAspect?: number
  maxSmallItems?: 3 | 4 | 5 | 6 | 7
}

export const calcSpeakerViewLayout: ICalcLayout<SpeakerViewLayoutOptions> = (
  containerWidth: number,
  containerHeight: number,
  numItems: number,
  options?: SpeakerViewLayoutOptions
): VideoLayoutItem[] => {
  const { gaps, itemAspect, maxSmallItems } = {
    ...DefaultSpeakerViewLayoutOptions,
    ...options,
  }

  if (numItems === 1) {
    let itemWidth = containerWidth - gaps * 2
    let itemHeight = itemWidth / itemAspect
    if (itemHeight + gaps * 2 > containerHeight) {
      itemHeight = containerHeight - gaps * 2
      itemWidth = itemHeight * itemAspect
    }
    const offsetTop = (containerHeight - itemHeight) / 2
    const offsetLeft = (containerWidth - itemWidth) / 2
    return [
      {
        x: offsetLeft,
        y: offsetTop,
        width: itemWidth,
        height: itemHeight,
      },
    ]
  }

  const smallItemWidth = (containerWidth - gaps) / maxSmallItems - gaps
  const smallItemHeight = smallItemWidth / itemAspect

  let bigItemHeight = containerHeight - smallItemHeight - 3 * gaps
  let bigItemWidth = bigItemHeight * itemAspect
  if (bigItemWidth + gaps * 2 > containerWidth) {
    bigItemWidth = containerWidth - gaps * 2
    bigItemHeight = bigItemWidth / itemAspect
  }

  const offsetTop =
    gaps + (containerHeight - bigItemHeight - smallItemHeight - 3 * gaps) / 2
  const offsetLeft =
    gaps + (containerWidth - gaps - (smallItemWidth + gaps) * maxSmallItems) / 2

  const numSmallItems = Math.min(numItems - 1, maxSmallItems)
  const items: VideoLayoutItem[] = [
    {
      x: offsetLeft + (containerWidth - 2 * gaps - bigItemWidth) / 2,
      y: smallItemHeight + gaps + offsetTop,
      width: bigItemWidth,
      height: bigItemHeight,
    },
  ]
  for (let i = 0; i < numSmallItems; i++) {
    items.push({
      x:
        i * (smallItemWidth + gaps) +
        offsetLeft +
        (containerWidth - 2 * gaps - numSmallItems * (smallItemWidth + gaps)) /
          2,
      y: offsetTop,
      width: smallItemWidth,
      height: smallItemHeight,
    })
  }

  return items
}
