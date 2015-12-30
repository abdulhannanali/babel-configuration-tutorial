"use strict";

var _marked = [jsRocksIsAwesome].map(regeneratorRuntime.mark);

function jsRocksIsAwesome() {
  return regeneratorRuntime.wrap(function jsRocksIsAwesome$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return "JSRocks is Awesome";

      case 2:
        _context.next = 4;
        return "JSRocks says JavaScript Rocks";

      case 4:
        return _context.abrupt("return", "because JavaScript really rocks");

      case 5:
      case "end":
        return _context.stop();
    }
  }, _marked[0], this);
}

var jsRocks = jsRocksIsAwesome();

console.log(jsRocks.next());
console.log(jsRocks.next());
console.log(jsRocks.next());
//# sourceMappingURL=index.js.map