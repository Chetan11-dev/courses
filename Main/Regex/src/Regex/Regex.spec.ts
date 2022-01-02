function detectAttributes(s: string): string {
  var lines = s.split("\n")
  var n = parseInt(lines.shift(), 10)

  var tagRE = new RegExp("(?:<\\s*(\\w+)[^>]*>)", "ig")
  var attrRE = new RegExp("(\\w+)=(?:\"[^\"]*\"|'[^']*')", "ig")
  var data = lines.splice(0, n)

  var tags = {}
  const cs = [s]
  cs.forEach(function (s) {
    console.log({ r: tagRE.exec(s) })
    console.log({ r: tagRE.exec(s) })
    console.log({ r: tagRE.exec(s) })
    console.log({ r: tagRE.exec(s) })
    console.log({ r: tagRE.exec(s) })
    console.log({ r: tagRE.exec(s) })
    console.log({ r: tagRE.exec(s) })
    console.log({ r: tagRE.exec(s) })
    console.log({ r: tagRE.exec(s) })
    console.log({ r: tagRE.exec(s) })

    var tagArr = null
    while ((tagArr = tagRE.exec(s)) != null) {
      //   console.log(tagArr)
      var tag = tagArr[1]
      if (tags[tag] === undefined) {
        tags[tag] = {}
      }

      var tagStr = tagArr[0]
      var attrArr = null
      while ((attrArr = attrRE.exec(tagStr)) != null) {
        var attr = attrArr[1]
        tags[tag][attr] = 0
      }
    }
  })

  var res = []
  for (var i in tags) {
    var attrs = []
    for (var j in tags[i]) {
      attrs.push(j)
    }
    attrs.sort()
    res.push({ tag: i, attrs: attrs })
  }

  res.sort(function (o1, o2) {
    return o1.tag > o2.tag
  })
  //   console.log(JSON.stringify({ res }, null, 4))
}

// a:href
// div:class
// p:
test("regex", () => {
  const r = /at(\.)?$/gm

  const str = `
  The fat
  cat sat
  on the mat.`

  let result = r.exec(str)
  while (result) {
    console.log(result)
    result = r.exec(str)
  }
  // r.exec()
  console.log(str.match(r))
  //   console.log({
  //     result:
  //       detectAttributes(`<p><a href="http://www.quackit.com/html/tutorial/html_links.cfm">Example Link</a></p>
  //   <div class="more-info"><a href="http://www.quackit.com/html/examples/html_links_examples.cfm">More Link Examples...</a></div>`),
  //   })
})

export {}
