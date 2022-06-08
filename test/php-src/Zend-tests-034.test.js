// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/034.phpt
  it("Testing multiples 'default:' in switch", function () {
    expect(parser.parseCode("<?php\nswitch (1) {\n    case 2:\n        print 'foo';\n        break;\n    case 3:\n        print 'bar';\n        break;\n    default:\n        print 1;\n        break;\n    default:\n        print 2;\n        break;\n    default:\n        print 3;\n        break;\n}\n?>")).toMatchSnapshot();
  });
});
