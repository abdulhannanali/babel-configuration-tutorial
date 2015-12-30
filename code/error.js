function* errorFulGenerator() {
  yield "yo"
  throw new Error("source maps are awesome")
  return ""
}


var errorGen = errorFulGenerator()
errorGen.next()
errorGen.next()
