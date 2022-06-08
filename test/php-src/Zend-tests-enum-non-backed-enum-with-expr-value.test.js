// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/non-backed-enum-with-expr-value.phpt
  it("Non-backed enum errors when case has int expression value", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar = 1 + 1;\n}\n?>")).toMatchSnapshot();
  });
});
