// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/non-backed-enum-with-int-value.phpt
  it("Non-backed enum errors when case has int value", function () {
    expect(parser.parseCode("<?php\nenum Foo {\n    case Bar = 1;\n}\n?>")).toMatchSnapshot();
  });
});
