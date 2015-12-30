"use strict";

var _marked = [errorFulGenerator].map(regeneratorRuntime.mark);

function errorFulGenerator() {
  return regeneratorRuntime.wrap(function errorFulGenerator$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return "yo";

      case 2:
        throw new Error("source maps are awesome");

      case 4:
      case "end":
        return _context.stop();
    }
  }, _marked[0], this);
}

var errorGen = errorFulGenerator();
errorGen.next();
errorGen.next();
//# sourceMappingURL=error.js.map