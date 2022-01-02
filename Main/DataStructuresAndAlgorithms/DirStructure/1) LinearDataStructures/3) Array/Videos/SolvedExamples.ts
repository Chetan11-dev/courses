function lastIndexOf(nums: number[], target: number): number {
  let result = -1
  for (let index = nums.length - 1; index >= 0; index--) {
    const element = nums[index]
    if (target === element) {
      return index
    }
  }
  return result
}

function hasDuplicates(nums: number[], target: number) {
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index]
    if (lastIndexOf(nums, element) !== index) {
      return true
    }
  }
  return false
}
