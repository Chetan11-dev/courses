function detectAttributes(s: string): string {}

test("regex", () => {
  const inputs = `
(75, 180)
(+90.0, -147.45)
(77.11112223331, 149.99999999)
(+90, +180)
(90, 180)
(-90.00000, -180.0000)
(75, 280)
(+190.0, -147.45)
(77.11112223331, 249.99999999)
(+90, +180.2)
(90., 180.)
(-090.00000, -180.0000)`
    .split("\n")
    .map((s) => s.trim())
  // .map((s) => console.log(s))

  const s = `Hi Alex howHi Alex how are you doing
	hI dave how are you doing
	Good by Alex
	hidden agenda
	Alex greeted Martha by saying Hi Martha`

  console.log(s.match(/[h|H][i|I]\s[^D|d]/g))
  //    /[a-zA-Z0-9_]+\@[a-zA-Z0-9_]+.com/g

  //   console.log({ result: inputs[0].match(regex) })
})

export {}
