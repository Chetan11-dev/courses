/* eslint-disable no-extend-native */
import ArrayDS from "./Array"
describe("ArrayDS", () => {
  function expectInMockedArray<A>(fn: () => () => void) {
    const arrayMethods: any = {
      push: undefined,
      pop: undefined,
    }

    const e1 = Object.entries(arrayMethods)

    let calledArrayMethod: any = undefined
    for (let index = 0; index < e1.length; index++) {
      const [key, value] = e1[index]
      arrayMethods[key] = Array.prototype[key as any]
      Array.prototype[key as any] = () => {
        calledArrayMethod = calledArrayMethod ?? key
      }
    }
    const check = fn()

    const e2 = Object.entries(arrayMethods)
    for (let index = 0; index < e2.length; index++) {
      const [key, value] = e2[index]
      Array.prototype[key as any] = value
    }

    if (calledArrayMethod) {
      throw new Error(calledArrayMethod + " Usage Not Allowed")
    }

    check()
  }

  test("indexOf", () => {
    expectInMockedArray(() => {
      const result = ArrayDS.indexOf([1, 2, 3], 2)
      return () => expect(result).toBe(1)
    })

    expectInMockedArray(() => {
      const result = ArrayDS.indexOf([1, 2, 3], 4)
      return () => expect(result).toBe(-1)
    })
  })

  test("push", () => {
    expectInMockedArray(() => {
      const arr = [1, 2, 3]
      ArrayDS.push(arr, 4)
      return () => expect(arr).toEqual([1, 2, 3, 4])
    })
  })

  test("pop", () => {
    expectInMockedArray(() => {
      const arr = [1, 2, 3]
      const result = ArrayDS.pop(arr)
      return () => {
        expect(result).toBe(3)
        expect(arr).toEqual([1, 2, undefined])
      }
    })
  })

  test("shift", () => {
    expectInMockedArray(() => {
      const arr = [1, 2, 3]
      const result = ArrayDS.shift(arr)

      return () => {
        expect(result).toBe(1)
        expect(arr).toEqual([2, 3, undefined])
      }
    })
  })

  test("unshift", () => {
    expectInMockedArray(() => {
      const arr = [1, 2, 3]
      ArrayDS.unshift(arr, 0)

      return () => {
        expect(arr).toEqual([0, 1, 2, 3])
      }
    })
  })

  test("splice", () => {
    expectInMockedArray(() => {
      const arr = [1, 2, 3]
      const result = ArrayDS.splice(arr, 1)

      return () => {
        expect(result).toEqual(2)
        expect(arr).toEqual([1, 3, undefined])
      }
    })
  })

  test("slice", () => {
    expectInMockedArray(() => {
      const arr = [1, 2, 3, 4, 5, 6, 7]
      const result = ArrayDS.slice(arr, 2, 5)

      return () => {
        expect(result).toEqual([3, 4, 5])
        expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7])
      }
    })
  })

  test("flat", () => {
    expectInMockedArray(() => {
      const arr = [1, 2, [3, 4, 5], [6], 7]
      const result = ArrayDS.flat(arr)

      return () => {
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7])
      }
    })
  })

  test("reverse", () => {
    expectInMockedArray(() => {
      const arr = [1, 2, 3]
      ArrayDS.reverse(arr)

      return () => {
        expect(arr).toEqual([3, 2, 1])
      }
    })
  })

  test("foreach", () => {
    expectInMockedArray(() => {
      const set = new Set()
      ArrayDS.foreach([1, 2, 3], (element) => {
        set.add(element)
      })

      return () => {
        expect(Array.from(set.entries()).map(([k]) => k)).toEqual([1, 2, 3])
      }
    })
  })

  test("map", () => {
    expectInMockedArray(() => {
      const result = ArrayDS.map([1, 2, 3], (element) => {
        return element * 2
      })

      return () => {
        expect(result).toEqual([2, 4, 6])
      }
    })
  })

  test("filter", () => {
    expectInMockedArray(() => {
      const result = ArrayDS.filter([1, 2, 3], (element) => {
        return element % 2 === 1
      })

      return () => {
        expect(result).toEqual([1, 3])
      }
    })
  })

  test("every", () => {
    expectInMockedArray(() => {
      const result = [
        ArrayDS.every([1, 2, 3], (element) => {
          return element % 2 === 1
        }),
        ArrayDS.every([1, 2, 3], (element) => {
          return element < 4
        }),
      ]

      return () => {
        expect(result).toEqual([false, true])
      }
    })
  })

  test("reduce", () => {
    expectInMockedArray(() => {
      const result = ArrayDS.reduce(
        [1, 2, 3],
        (acc, curr) => {
          return acc + curr
        },
        0
      )

      return () => {
        expect(result).toEqual(6)
      }
    })
  })
})
