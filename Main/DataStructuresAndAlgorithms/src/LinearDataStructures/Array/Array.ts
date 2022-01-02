function indexOf(numbers: number[], target: number): number {
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index]
    if (element === target) {
      return index
    }
  }
  return -1
}

function push(numbers: number[], target: number): void {
  numbers[numbers.length] = target
}

function pop(numbers: (number | undefined)[]): number | undefined {
  const result = numbers[numbers.length - 1]
  numbers[numbers.length - 1] = undefined
  return result
}

function shift(numbers: (number | undefined)[]): number | undefined {
  const result = numbers[0]
  for (let index = 1; index < numbers.length; index++) {
    const element = numbers[index]
    numbers[index - 1] = element
  }
  numbers[numbers.length - 1] = undefined
  return result
}

function unshift(numbers: (number | undefined)[], element: number): void {
  for (let index = numbers.length - 1; index >= 0; index--) {
    const element = numbers[index]
    numbers[index + 1] = element
  }
  numbers[0] = element
}
function splice(
  numbers: (number | undefined)[],
  at: number
): number | undefined {
  const result = numbers[at]
  for (let index = at + 1; index < numbers.length; index++) {
    const element = numbers[index]
    numbers[index - 1] = element
  }
  numbers[numbers.length - 1] = undefined
  return result
}

function slice(numbers: number[], start: number, end: number): number[] {
  const result: number[] = []

  for (let index = start; index < end; index++) {
    const element = numbers[index]
    push(result, element)
  }

  return result
}

function flat(numbers: (number | number[])[]): number[] {
  const result: number[] = []

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number") {
      push(result, numbers[i] as number)
    } else {
      for (let j = 0; j < (numbers[i] as number[]).length; j++) {
        push(result, (numbers[i] as number[])[j])
      }
    }
  }

  return result
}

function swap(s: any[], from: number, to: number): void {
  const temp = s[from]
  s[from] = s[to]
  s[to] = temp
}
function reverse(numbers: number[]): void {
  let left = 0
  let right = numbers.length - 1

  while (left < right) {
    swap(numbers, left, right)
    left++
    right--
  }
}

function foreach(
  numbers: number[],
  callbackfn: (element: number) => void
): void {
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index]
    callbackfn(element)
  }
}
function map(
  numbers: number[],
  callbackfn: (element: number) => number
): number[] {
  const result: number[] = []
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index]
    push(result, callbackfn(element))
  }
  return result
}

function filter(
  numbers: number[],
  predicate: (element: number) => boolean
): number[] {
  const result: number[] = []
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index]
    if (predicate(element)) {
      push(result, element)
    }
  }
  return result
}

function every(
  numbers: number[],
  predicate: (element: number) => boolean
): boolean {
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index]
    if (!predicate(element)) {
      return false
    }
  }
  return true
}

function reduce(
  numbers: number[],
  reducer: (accumulated: number, current: number) => number,
  initialValue: number
): number {
  let result = initialValue
  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index]
    result = reducer(result, element)
  }
  return result
}

/**
 * Suffixed with DS to avoid name collision with Javascript Array
 */
const ArrayDS = {
  indexOf,
  push,
  pop,
  shift,
  unshift,
  splice,
  slice,
  flat,
  reverse,
  foreach,
  map,
  filter,
  every,
  reduce,
}
export default ArrayDS
