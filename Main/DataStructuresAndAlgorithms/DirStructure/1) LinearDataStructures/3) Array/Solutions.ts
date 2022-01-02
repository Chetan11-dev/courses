function getMaximumElement(nums: number[]): number {
  let max = Number.NEGATIVE_INFINITY
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index]
    if (element > max) {
      max = element
    }
  }
  return max
}

function swap(array: any[], from: number, to: number): void {
  const temp = array[from]
  array[from] = array[to]
  array[to] = temp
}
function reverse(nums: number[]): void {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    swap(nums, left, right)
    left++
    right--
  }
}

function indexOf(nums: number[], target: number) {
  let result = -1
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index]
    if (target === element) {
      return index
    }
  }
  return result
}
function getCommonElements(nums1: number[], nums2: number[]): number[] {
  const intersection = []
  for (let index = 0; index < nums2.length; index++) {
    const arr2Element = nums2[index]
    if (indexOf(nums1, arr2Element) !== -1) {
      intersection.push(arr2Element)
    }
  }
  return intersection
}

const ArraySolutions = {
  getMaximumElement,
  reverse,
  getCommonElements,
}
export default ArraySolutions
