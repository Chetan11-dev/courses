test("regex", () => {
  const inputs = [
    "This line has junk text.",
    "121.18.19.20",
    "2001:0db8:0000:0000:0000:ff00:0042:8329",
    "1050:1000:2000:ab00:5:600:300c:326a",
  ]

  function isV4(s: string) {
    const ipv4 = /^[0-9]{0,3}\.[0-9]{0,3}\.[0-9]{0,3}\.[0-9]{0,3}$/
    return ipv4.test(s)
  }

  function isV6(s: string) {
    const ipv6 =
      /^[0-9a-z]{1,4}:[0-9a-z]{1,4}:[0-9a-z]{1,4}:[0-9a-z]{1,4}:[0-9a-z]{1,4}:[0-9a-z]{1,4}:[0-9a-z]{1,4}:[0-9a-z]{1,4}$/

    return ipv6.test(s)
  }

  console.log({ result: isV6(inputs[3]) })
})

export {}
