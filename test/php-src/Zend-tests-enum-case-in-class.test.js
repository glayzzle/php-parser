// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/case-in-class.phpt
  it("Enum case in class", function () {
    expect(() => parser.parseCode("<?php\nclass Foo {\n    case Bar;\n}\n?>")).toThrowErrorMatchingSnapshot();
  });
});
