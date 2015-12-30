function* jsRocksIsAwesome() {
  yield "JSRocks is Awesome"
  yield "JSRocks says JavaScript Rocks"
  return "because JavaScript really rocks"
}

var jsRocks = jsRocksIsAwesome()

console.log(jsRocks.next())
console.log(jsRocks.next())
console.log(jsRocks.next())
